import React from "react";
import styled from "@emotion/styled";
import logo from "../../assets/images/Oasis (1).png";
import Button from "../../componets/button/Button";
import ArrowIcon from "../../componets/ArrowIcon";
import ArrowUp from "../../componets/ArrowUp";

const RootContainer = styled.div({
  padding: " 70px",
  backgroundColor: "rgba(16, 16, 16, 1)",
});
const Root = styled.div({
  display: "flex",
  justifyContent: "space-between",
});
const FirstSection = styled.div({
  display: "flex  ",
  justifyContent: "space-between",
  flexDirection: "column",
});
const SecondSection = styled.div({
  display: "flex  ",
  flexDirection: "column",
  
});
const FirstSectionText = styled.div({
  display: "flex",
  gap: 10,
  color: "white",
});
const FirstSectionLogo = styled.div({});
const Page = styled.a({
  color: "white",
  textDecoration: "none",
  alignItems: "flex-end",
});
const Heading = styled.p(() => ({
  fontSize: "13px",
  fontWeight: 400,
  color: "rgba(255, 255, 255, 1)",
}));
const Text = styled.p(() => ({
  fontSize: "20px",
  fontWeight: 400,
  color: "rgba(255, 255, 255, 1)",
}));
const UppButton = styled.a({});

const Footer = () => {
  return (
    <RootContainer>
      <Root>
        <FirstSection>
          <FirstSectionLogo>
            <img src={logo} color="white" alt="" />
          </FirstSectionLogo>
          <FirstSectionText>
            <Page href="#">Home</Page>/<Page href="#">Blog</Page>/
            <Page href="#">Sale</Page>/<Page href="#">About us</Page>
          </FirstSectionText>
        </FirstSection>
        <SecondSection >
          <div>
            <Heading>Contact Us</Heading>
            <Text>+1 999 888-76-54</Text>
          </div>
          <div>
            <Heading style={{ fontSize: "14px" }}>Email</Heading>
            <Text style={{ fontSize: "14px" }}>hello@logoipsum.com</Text>
          </div>
        </SecondSection>
        <SecondSection>
          <div>
            <Heading>Address</Heading>
            <Text style={{ fontSize: "14px" }}>
              2118 Thornridge Cir. Syracuse, Connecticut 35624
            </Text>
          </div>
          <div>
            <Heading>Opening hours</Heading>
            <Text>9am—6pm</Text>
          </div>
        </SecondSection>
        <FirstSection>
          <Page href="#">
            <Button
              width="56px"
              height="56px"
              BgColor="white"
              borderRadius="50px"
              icon={<ArrowUp color="black" size={25} />}
              color="black"
              border="solid black 2px"
            />
          </Page>
          <Heading>© 2023 — Copyright</Heading>
        </FirstSection>
      </Root>
    </RootContainer>
  );
};

export default Footer;
