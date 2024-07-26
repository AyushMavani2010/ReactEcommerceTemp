import styled from "@emotion/styled";
import { ReactComponent as CartTrolly } from "../assets/icon/cart.svg";
import React, { FC } from "react";

// Define the IconProps interface
interface IconProps {
  color?: string;
  size?: number;
}

const Cart: FC<IconProps> = ({ color, size }) => {
  return <CartTrolly width={size} height={size} color={color} />;
};

export default Cart;
