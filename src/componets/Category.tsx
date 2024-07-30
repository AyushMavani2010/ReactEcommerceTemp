import styled from "@emotion/styled";
import React, { FC } from "react";
import Button from "../componets/button/Button";
import ArrowRight from "../componets/ArrowIcon";

interface CategoriesProps {
  name?: string;
  image?: string;
  imagesec?: string;
  width?: string;
  style?: string;
}

const RootContainer = styled.div(() => ({
  display: "flex",
  backgroundColor: "rgba(243, 244, 247, 1)",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Heading = styled.p(() => ({
  fontSize: "2vw",
  fontWeight: 600,
  "@media(max-width:1050px)": {
    fontSize: "20px",
  },
  "@media(max-width:768px)": {
    fontSize: "15px",
  },
}));

const RootText = styled.div(() => ({
  marginLeft: "100px",
  "@media(max-width: 1050px)": {
    marginLeft: "50px",
  },
}));
const RootImage = styled.div(() => ({
  marginLeft: "100px",
  "@media(max-width: 1050px)": {
    marginLeft: "50px",
  },
  "@media(max-width: 768px)": {
    marginLeft: "20px",
  },
}));

const Image = styled.img(() => ({
  "@media(max-width: 1700px)": {
    width: "100%",
  },
}));

const Category: FC<CategoriesProps> = ({ name, image, width, style }) => {
  return (
    <RootContainer>
      <RootText>
        <div>
          <Heading>{name}</Heading>
          <Button
            width="150px"
            height="50px"
            BgColor="rgba(243, 244, 247, 1)"
            borderRadius="50px"
            icon={<ArrowRight size={20} />}
            name="Shop now"
            color="rgba(104, 106, 116, 1)"
            border="solid black 2px"
          />
        </div>
      </RootText>
      <RootImage>
        <Image src={image} />
      </RootImage>
    </RootContainer>
  );
};

export default Category;
