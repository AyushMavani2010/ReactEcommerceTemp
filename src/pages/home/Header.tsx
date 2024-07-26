import React from "react";
import styled from "@emotion/styled";
import logo from "../../assets/images/Oasis.png";
import "../../App.css";
import ArrowRight from "../../componets/ArrowIcon";
import Cart from "../../componets/Cart";
import Button from "../../componets/button/Button";

const Container = styled.div({
  fontFamily: "Inter",
  padding: "20px 70px ",
});

const Trolly = styled.button({
  width: "50px",
  height: "50px",
  backgroundColor: "rgba(248, 247, 251, 1)",
  borderRadius: "50%",
  marginRight: "20px",
  border: "none",
});

const Flex = styled.div({
  display: "flex",
});

const HeaderMain = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const HomeMenu = styled.ul({
  display: "flex",
  justifyContent: "space-between",
  listStyle: "none",
  gap: "20px",
});

const StyledLink = styled.a({
  textDecoration: "none",
  color: "black",
});

const Header = () => {
  return (
    <HeaderMain>
      <div>
        <img src={logo} alt="" />
      </div>
      <HomeMenu>
        <li>
          <StyledLink href="#">Home</StyledLink>
        </li>
        <li>
          <StyledLink href="#">Shop</StyledLink>
        </li>
        <li>
          <StyledLink href="#">Categories</StyledLink>
        </li>
        <li>
          <StyledLink href="#">Blog</StyledLink>
        </li>
      </HomeMenu>
      <Flex>
        <Trolly>
          <Cart size={20} />
        </Trolly>
        <div>
          <Button
            width="150px"
            height="50px"
            BgColor="rgb(124, 113, 223 )"
            borderRadius="50px"
            icon={<ArrowRight size={20} color="white"/>}
            name="Get started"
            color="white"
            border="none"
          />
        </div>
      </Flex>
    </HeaderMain>
  );
};

export default Header;
