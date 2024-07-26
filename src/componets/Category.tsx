import styled from "@emotion/styled";
import React, { FC } from "react";
import Button from "../componets/button/Button";
import ArrowRight from "../componets/ArrowIcon";

interface CategoriesProps {
  name: string;
  image: string;
}

const RootContainer = styled.div(() => ({
  display: "flex",
  backgroundColor: "rgba(243, 244, 247, 1)",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "100px",
}));

const Heading = styled.p(() => ({
  fontSize: "39px",
  fontWeight: 600,
}));

const Image = styled.img(() => ({}));

const Category: FC<CategoriesProps> = ({ name, image }) => {
  return (
    <RootContainer>
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
      <Image src={image} />
    </RootContainer>
  );
};

export default Category;
