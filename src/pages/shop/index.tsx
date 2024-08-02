import React from "react";
import Header from "../home/Header";
import Hero from "../shop/Hero";
import ProductListing from "./ProductListing";
import Product from "../shop/Product";
import Slider from "../shop/Slider";

const Shop = () => {
  return (
    <>
      <Hero />
      <Slider />
      <Product />
      <ProductListing />
    </>
  );
};

export default Shop;
