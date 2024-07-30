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
const Container = styled.div({
  fontFamily: "Inter",
  padding: "20px 70px ",
  "@media(max-width: 768px)": {
    padding:"0px 50px"
  },
  "@media(max-width: 540px)": {
    padding:"20px 30px"
  },
  "@media(max-width: 440px)": {
    padding:"20px 20px"
  },
});

const index = () => {
  return (
    <>
      <Container>
        <Header />
        {/* <Hero />   */}
        <Category />
        {/* <Product /> */}
        {/* <Gallery /> */}
        {/* <Faq /> */}
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default index;
