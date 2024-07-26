import React from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

import Header from "./Header";
import Hero from "./Hero";
import Category from "./Category";
import Product from "./Product";
import Gallery from "./Gallery";
import Faq from "./Faq";
const Container = styled.div({
  fontFamily: "Inter",
  padding: "20px 70px ",
});

const index = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Category />
      <Product />
      <Gallery />
      <Faq />
    </Container>
  );
};

export default index;
