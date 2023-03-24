import React from "react";

import Navbar from "../../components/navbar";
import GetAllProducts from "./functions/getAllProducts";

const Product = () => {
  return (
    <>
      <Navbar />
      <GetAllProducts />
    </>
  );
};

export default Product;
