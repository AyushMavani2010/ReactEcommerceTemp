import React from "react";
import styled from "@emotion/styled";
import logo from "../../assets/images/Oasis.png";
import "../../App.css";
import ArrowRight from "../../componets/ArrowIcon";
import Cart from "../../componets/Cart";
import MenuIcon from "../../componets/Menu";
import Button from "../../componets/button/Button";

const Trolly = styled.button({
  width: "50px",
  height: "50px",
  backgroundColor: "rgba(248, 247, 251, 1)",
  borderRadius: "50%",
  marginRight: "20px",
  border: "none",
  "@media (max-width: 768px)": {
    display: "none",
  },
});

const HeaderButton = styled.div({
  "@media (max-width: 768px)": {
    display: "none",
  },
});

const MenuIconWrapper = styled.div({
  display: "none",
  "@media (max-width: 768px)": {
    display: "block",
  },
});

const Flex = styled.div({
  display: "flex",
});

const RootContiner = styled.div({
  position: "sticky",
  backgroundColor: "white",
  top: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "auto",
});

const HomeMenu = styled.ul({
  display: "flex",
  justifyContent: "space-between",
  listStyle: "none",
  gap: "20px",
  "@media (max-width: 768px)": {
    display: "none",
  },
});

const StyledLink = styled.a({
  textDecoration: "none",
  color: "black",
});

const Header = () => {
  return (
    <RootContiner>
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
        <HeaderButton>
          <Button
            width="150px"
            height="50px"
            BgColor="rgb(124, 113, 223 )"
            borderRadius="50px"
            icon={<ArrowRight size={20} color="white" />}
            name="Get started"
            color="white"
            border="none"
          />
        </HeaderButton>
        <MenuIconWrapper>
          <MenuIcon size={30} color="black" />
        </MenuIconWrapper>
      </Flex>
    </RootContiner>
  );
};

export default Header;
