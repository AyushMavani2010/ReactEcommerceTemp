import React from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

import Header from "./Header";
import Hero from "./Hero";
import Category from "./Category";
import Product from "./Product";
import Gallery from "./Gallery";
import Faq from "./Faq";
import Footer from "./Footer";

const index = () => {
  return (
    <>
      <Hero />
      <Category />
      <Product />
      <Gallery />
      <Faq />
      <Footer />
    </>
  );
};

export default index;
