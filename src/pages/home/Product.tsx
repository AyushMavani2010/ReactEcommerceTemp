import React from "react";
import styled from "@emotion/styled";
import "../../App.css";

import GalleryFirstImage from "../../assets/images/Image (1).png";
import GallerySectImage from "../../assets/images/Image (2).png";
import GalleryThirdImage from "../../assets/images/Image (3).png";
import GalleryFourthImage from "../../assets/images/Image (4).png";
import GalleryFIfthImage from "../../assets/images/Image (5).png";
import GallerySixthImage from "../../assets/images/Image (6).png";
import GallerySevenImage from "../../assets/images/Image (7).png";
import GalleryEightImage from "../../assets/images/Image (8).png";
import GalleryNineImage from "../../assets/images/Image (9).png";
import GalleryTenImage from "../../assets/images/Image (10).png";
import GalleryElevenImage from "../../assets/images/Image (11).png";
import GalleryTweImage from "../../assets/images/Image (12).png";
import GalleryThrImage from "../../assets/images/Image (13).png";
import GalleryFourmage from "../../assets/images/Image (14).png";
import GalleryFifImage from "../../assets/images/Image (15).png";
import GallerySixImage from "../../assets/images/Image (16).png";
import GallerySevImage from "../../assets/images/Image (17).png";
import GalleryEigImage from "../../assets/images/Image (18).png";
import GalleryNinImage from "../../assets/images/Image (19).png";
import GalleryTewImage from "../../assets/images/Image (20).png";
import Slider from "../../assets/images/bottom.png";
import { ProductData } from "../../database/index";

import GalleryCard from "../../componets/GalleryCard";
const RootContainer = styled.div({
  paddingBottom: "100px",
});
const CategoriesHeading = styled.p({
  fontSize: "39px",
  fontWeight: 600,
  "@media(max-width: 540px)": {
    fontSize: "29px",
  },
});

const Flex = styled.div({
  display: "flex",
  gap: 50,
  padding: "0px 0px 50px 0px",
  flexWrap: "wrap",
});

const FooterArea = styled.div({
  textAlign: "center",
});

const FooterButton = styled.div({
  display: "flex",
  justifyContent: "center",
  padding: "30px 0px 0px 0px ",
});

const FooterText = styled.p(() => ({
  fontSize: "14px",
  fontWeight: 400,
  display: "flex",
  justifyContent: "center",
}));
const Button = styled.button({
  width: "150px",
  height: "50px",
  BgColor: "white",
  borderRadius: "50px",
  color: "black",
  border: "solid black 2px",
});

const FooterImage = styled.img(() => ({}));

const Product = () => {
  return (
    <RootContainer>
      <CategoriesHeading>Top Products</CategoriesHeading>

       {/* <Flex>
        <GalleryCard
          image={GalleryFirstImage}
          name="Faux Leather Sofa Couch"
          price="$129"
        ></GalleryCard>
        <GalleryCard
          image={GallerySectImage}
          name="Boucle Accent Chair "
          price="$44"
        ></GalleryCard>
        <GalleryCard
          image={GalleryThirdImage}
          name="Ceramic Flower Vase"
          price="$8"
        ></GalleryCard>
        <GalleryCard
          image={GalleryFourthImage}
          name="Modern Fabrix Accent"
          price="$38"
        ></GalleryCard>

        <GalleryCard
          image={GalleryFIfthImage}
          name="Wooden Accent Chair"
          price="$129"
        ></GalleryCard>
        <GalleryCard
          image={GallerySixthImage}
          name="Modern Ceramic Lamp "
          price="$44"
        ></GalleryCard>
        <GalleryCard
          image={GallerySevenImage}
          name="Aurla Fabric Accent "
          price="$8"
        ></GalleryCard>
        <GalleryCard
          image={GalleryEightImage}
          name="Natural Wood Table"
          price="$38"
        ></GalleryCard>

        <GalleryCard
          image={GalleryNineImage}
          name="Loveseat Compact 2-S"
          price="$129"
        ></GalleryCard>
        <GalleryCard
          image={GalleryTenImage}
          name="Modern Upholstered Chair"
          price="$44"
        ></GalleryCard>
        <GalleryCard
          image={GalleryElevenImage}
          name="Utopia Plant Pots"
          price="$8"
        ></GalleryCard>
        <GalleryCard
          image={GalleryTweImage}
          name="Roundhill  Accent Chair"
          price="$38"
        ></GalleryCard>

        <GalleryCard
          image={GalleryThrImage}
          name="Round Terra Marble Table"
          price="$129"
        />
        <GalleryCard
          image={GalleryFourmage}
          name="Ceramic Rustic Vase Matte "
          price="$44"
        ></GalleryCard>
        <GalleryCard
          image={GalleryFifImage}
          name="Metro Luxe Duo Sofa"
          price="$8"
        ></GalleryCard>
        <GalleryCard
          image={GallerySixImage}
          name="Kitchen Bar Stool"
          price="$38"
        ></GalleryCard>

        <GalleryCard
          image={GallerySevImage}
          name="Luxe Modern Armchair "
          price="$129"
        ></GalleryCard>
        <GalleryCard
          image={GalleryEigImage}
          name="Round Fluted Accent Table "
          price="$44"
        ></GalleryCard>
        <GalleryCard
          image={GalleryNinImage}
          name="Round Terra Marble Side Table"
          price="$8"
        ></GalleryCard>
        <GalleryCard
          image={GalleryTewImage}
          name="Luna Modern Round Ottoman"
          price="$38"
        ></GalleryCard>
      </Flex>  */}
      <Flex>
        {ProductData.map((item: any, index: any) => (
          <GalleryCard
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </Flex>

      <FooterArea>
        <FooterText>Showing 20 of 48 results</FooterText>
        <hr style={{ minWidth: "200px", maxWidth: "200px" }} />

        <FooterButton>
          <Button>Shop more</Button>
        </FooterButton>
      </FooterArea>
    </RootContainer>
  );
};

export default Product;
