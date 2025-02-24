import React, { useState } from "react";
import styled from "@emotion/styled";
import logo from "../../assets/images/Oasis.png";
import "../../App.css";
import ArrowRight from "../../componets/ArrowIcon";
import Cart from "../../componets/Cart";
import MenuIcon from "../../componets/Menu";
import Button from "../../componets/button/Button";
import { Link } from "react-router-dom";

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
  alignItems: "center",
});

const RootContiner = styled.div({
  position: "sticky",
  backgroundColor: "white",
  top: 0,
  padding: "10px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "auto",
  zIndex: 1000,
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

const DropdownMenu = styled.ul({
  position: "absolute",
  top: "0px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "white",
  listStyle: "none",
  padding: "10px 20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  "@media (min-width: 768px)": {
    display: "none",
  },
});

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <RootContiner>
      <div>
        <img src={logo} alt="Oasis Logo" />
      </div>
      <HomeMenu>
        <li>
          <StyledLink href="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink href="/shop">Shop</StyledLink>
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
        <MenuIconWrapper onClick={toggleDropdown}>
          <MenuIcon size={30} color="black" />
        </MenuIconWrapper>
      </Flex>
      {dropdownVisible && (
        <DropdownMenu>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/shop">Shop</StyledLink>
          </li>
          <li>
            <StyledLink href="#">Categories</StyledLink>
          </li>
          <li>
            <StyledLink href="#">Blog</StyledLink>
          </li>
        </DropdownMenu>
      )}
    </RootContiner>
  );
};

export default Header;
