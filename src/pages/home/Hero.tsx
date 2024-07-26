import React from "react";

import styled from "@emotion/styled";
import HeroImage from "../../assets/images/image.png";

const HeroMain = styled.div({
  padding: "100px 0px",
});
const HeroTextMain = styled.div({
  textAlign: "center",
});
const HeroFirstText = styled.p({
  fontSize: "18px",
  fontWeight: 500,
});
const HeroSecText = styled.p({
  fontSize: "61px",
  fontWeight: 700,
});
const HeroThirdText = styled.p({
  fontSize: "20px",
  fontWeight: 400,
});
const HeroMainImage = styled.div({
  display: "flex",
  justifyContent: "center",
});
const Hero = () => {
  return (
    <HeroMain>
      <HeroTextMain>
        <HeroFirstText>FURNITURE STORE</HeroFirstText>
        <HeroSecText>
          Discover the Artistry of Modern <br />
          Contemporary Furniture
        </HeroSecText>
        <HeroThirdText>
          Experience the elegance and functionality of cutting-edge design where
          luxury meets innovation in every piece for <br /> ultimate relaxation
        </HeroThirdText>
      </HeroTextMain>
      <HeroMainImage>
        <img src={HeroImage} alt="" style={{flex:1}} />
      </HeroMainImage>
    </HeroMain>
  );
};

export default Hero;
