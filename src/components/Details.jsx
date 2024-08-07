import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { productContext } from "../Utils/Context";
import axios from "../Utils/axios";
import Loading from "./Loading";

const Details = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  console.log(id);

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      //  console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <>
      <div className="w-[70%] flex h-full justify-between gap-10 items-center m-auto p-[10%]">
        <img
          className="object-contain  h-[80%] w-[40%] "
          src={`${product.image}`}
          alt=""
        />
        <div className="content  w[40%] ">
          <h1 className="text-4xl my-2"> {product.title} </h1>
          <h3 className="text-zinc-500 mb-3">{product.category} </h3>
          <h2 className="text-red-400 mb-2 "> $ : {product.price} </h2>
          <p className=" mb-[5%]"> {product.description}</p>
          <Link className="mr-5 py-2 px-5 border rounded border-blue-500 text-blue-500">
            Edit
          </Link>
          <Link className="py-2 px-5 border rounded border-red-500 text-red-500">
            Delete
          </Link>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Details;
