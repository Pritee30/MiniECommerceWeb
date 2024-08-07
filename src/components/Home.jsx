import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../Utils/Context";
import Loading from "./Loading";
import axios from "../Utils/axios";

const Home = () => {
  const [products] = useContext(productContext);
  const { search } = useLocation();

  const category = decodeURIComponent(search.split("=")[1]); // decodeURIComponent is used convert into a string

  const [filteredProducts, setFilteredProducts] = useState();

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(!filteredProducts || category == "undefined" ) setFilteredProducts(products);
    if (category != "undefined") getProductCategory();
  }, [category,products]);

  return products ? (
    <>
      <Nav />
      <div className="h-full w-[85%] pt-[5%] p-5 flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
              className="card mr-3 mb-3 p-3 border shadow rounded w-[18%] h-[32vh] justify-center flex-col flex items-center"
            >
              <div
                className="hover:scale-110 w-full mb-3 h-[80%] bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${p.image})` }}
              >
               
              </div>
              <h1 className="hover:text-blue-300">{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
