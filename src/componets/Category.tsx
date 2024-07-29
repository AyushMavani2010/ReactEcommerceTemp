import styled from "@emotion/styled";
import React, { FC } from "react";
import Button from "../componets/button/Button";
import ArrowRight from "../componets/ArrowIcon";

interface CategoriesProps {
  name: string;
  image?: string;
  imagesec?: string;
}

const RootContainer = styled.div(() => ({
  display: "flex",
  backgroundColor: "rgba(243, 244, 247, 1)",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "100px",
  "@media(max-width:1050px)": {
    paddingLeft: "35px",
  },
}));

const Heading = styled.p(() => ({
  fontSize: "39px",
  fontWeight: 600,
  "@media(max-width:1050px)": {
    fontSize: "20px",
  },
  "@media(max-width:768px)": {
    fontSize: "15px",
  },
  width: "auto",
}));

const Image = styled.img(() => ({
  "@media(max-width: 1190px)": {
    width: "100%",
  },
}));

const Category: FC<CategoriesProps> = ({ name, image }) => {
  return (
    <RootContainer>
      <div>
        <Heading>{name}</Heading>
        <div>
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
      </div>
      <div>
        <Image src={image} />
      </div>
    </RootContainer>
  );
};

export default Category;
