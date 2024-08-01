import React from "react";
import styled from "@emotion/styled";
import Search from "../../componets/Search";
const RootContianer = styled.div({
  padding: "100px 0px",
});
const RootDiv = styled.div({});
const Heading = styled.p({
  fontSize: "49px",
  fontWeight: "700",
  display: "flex",
  justifyContent: "center",
});
const HeroText = styled.p({
  fontSize: "28px",
  fontWeight: "300",
  color: "rgba(95, 105, 128, 1)",

  display: "flex",
  justifyContent: "center",
});
const PageDiv = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: 20,
});
const Input = styled.input({
  borderRadius: "50px",
  height: "50px",
  border: "1px solid rgba(186, 187, 193, 1)",
  fontSize: "16px",
  fontWeight: 400,
});
const InputContainer = styled.div({
  display: "flex",
  justifyContent: "center",
});
const Page = styled.a({
  textDecoration: "none",
  color: "rgba(95, 105, 128, 1)",
  fontSize: "18px",
});
const HeroInput = styled.input({});
const Hero = () => {
  return (
    <RootContianer>
      <RootDiv>
        <Heading>Sitting Room</Heading>
        <HeroText>
          Transform your sitting room with our elegant and functional seating
          options, perfect for every modern home.
        </HeroText>
        <PageDiv>
          <Page href="/">HomePage </Page>/
          <Page href="/category">Categories</Page>/
          <Page href="#">Sitting Room</Page>
        </PageDiv>
        <InputContainer>
          <Input placeholder="Search by name or category..."></Input>
          <Search size={20} />
        </InputContainer>
      </RootDiv>
    </RootContianer>
  );
};

export default Hero;
