import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Button from "../componets/button/Button";
import ArrowRight from "./ArrowIcon";

const Slider = () => {
  const options = {
    items: 10,
    autoWidth: true,
    margin: 20,
  };
  return (
    <div>
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <Button
            width="150px"
            height="50px"
            BgColor="rgba(124, 113, 223, 1)"
            borderRadius="50px"
            name="All"
            color="white"
            border="none"
          />
        </div>
        <div className="item">
          <Button
            width="150px"
            height="50px"
            BgColor="rgba(248, 247, 251, 1)"
            borderRadius="50px"
            name="Bedroom"
            color="rgba(46, 47, 51, 1)"
            border="none"
          />
        </div>
        <div className="item">
          <Button
            width="150px"
            height="50px"
            BgColor="rgba(248, 247, 251, 1)"
            borderRadius="50px"
            name="Bedroom"
            color="rgba(46, 47, 51, 1)"
            border="none"
          />
        </div>
        <div className="item">
          <Button
            width="150px"
            height="50px"
            BgColor="rgba(248, 247, 251, 1)"
            borderRadius="50px"
            name="Bedroom"
            color="rgba(46, 47, 51, 1)"
            border="none"
          />
        </div>
        <div className="item">
          <Button
            width="150px"
            height="50px"
            BgColor="rgba(248, 247, 251, 1)"
            borderRadius="50px"
            name="Bedroom"
            color="rgba(46, 47, 51, 1)"
            border="none"
          />
        </div>
        <div className="item">
          <Button
            width="150px"
            height="50px"
            BgColor="rgba(248, 247, 251, 1)"
            borderRadius="50px"
            name="Bedroom"
            color="rgba(46, 47, 51, 1)"
            border="none"
          />
        </div>
        <div className="item">
          <Button
            width="150px"
            height="50px"
            BgColor="rgba(248, 247, 251, 1)"
            borderRadius="50px"
            name="Bedroom"
            color="rgba(46, 47, 51, 1)"
            border="none"
          />
        </div>
        <div className="item">
          <Button
            width="150px"
            height="50px"
            BgColor="rgba(248, 247, 251, 1)"
            borderRadius="50px"
            name="Bedroom"
            color="rgba(46, 47, 51, 1)"
            border="none"
          />
        </div>
        <div className="item">
          <Button
            width="150px"
            height="50px"
            BgColor="rgba(248, 247, 251, 1)"
            borderRadius="50px"
            name="Bedroom"
            color="rgba(46, 47, 51, 1)"
            border="none"
          />
        </div>
        <div className="item">
          <Button
            width="150px"
            height="50px"
            BgColor="rgba(248, 247, 251, 1)"
            borderRadius="50px"
            name="Bedroom"
            color="rgba(46, 47, 51, 1)"
            border="none"
          />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Slider;
