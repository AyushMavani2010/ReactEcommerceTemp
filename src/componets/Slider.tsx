import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Button from "../componets/button/Button";
import ArrowRight from "./ArrowIcon";
import Footer from "../pages/home/Footer";

const Slider = () => {
  const options = {
    items: 10,
    autoWidth: true,
    margin: 20,
    dots: false,
    responsiveClass: true,
  };
  return (
    <div>
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <a href="">
            <Button
              width="150px"
              height="50px"
              BgColor="rgba(124, 113, 223, 1)"
              borderRadius="50px"
              name="All"
              color="white"
              border="none"
            />
          </a>
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
            name="Living room"
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
            name="Kitchen"
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
            name="Workspace"
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
            name="Outdoor"
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
            name="Bathroom"
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
            name="Home office"
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
            name="Dining room"
            color="rgba(46, 47, 51, 1)"
            border="none"
          />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Slider;
