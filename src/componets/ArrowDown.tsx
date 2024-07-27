import { ReactComponent as ArrowRight } from "../assets/icon/arrow-down.svg";
import React, { FC } from "react";

interface IconProps {
  color?: string;
  size?: number;
}

const ArrowDown: FC<IconProps> = ({ color, size }) => {
  return <ArrowRight width={size} height={size} color={color} />;
};

export default ArrowDown;
