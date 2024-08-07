import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const productContext = createContext();

const Context = ({children}) => {
  const [products, setProducts] = useState(null); 


 //calling data from an api
   const getProducts = async () => {
      try {
         const {data} = await axios("/products");
         setProducts(data);
         console.log(data);
      } catch (error) {
         console.log(error);
      }
   };
    
  useEffect(() => {
       getProducts();
  } ,[]);

  return <productContext.Provider value={[products, setProducts]}>
       {children}
    </productContext.Provider>
};

export default Context
