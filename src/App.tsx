import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/home/Header";
import Shop from "./pages/shop";
import Home from "./pages/home";
import styled from "@emotion/styled";

const Container = styled.div({
  fontFamily: "Inter",
  padding: "20px 70px ",
  "@media(max-width: 768px)": {
    padding: "20px 50px"
  },
  "@media(max-width: 540px)": {
    padding: "20px 30px"
  },
  "@media(max-width: 440px)": {
    padding: "20px 20px"
  },
});
const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
