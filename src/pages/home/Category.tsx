import React from "react";
import styled from "@emotion/styled";

import ArrowRight from "../../componets/ArrowIcon";

import CategoryImage from "../../assets/images/HeroMain.png";
import CategorySecFirImage from "../../assets/images/Nightstand -10 1.png";
import CategorySecSecImage from "../../assets/images/Nightstand -10 1 (1).png";
import CategoryThirdImage from "../../assets/images/Nightstand -10 1 (2).png";
import CategoryCard from "../../componets/Category";
import Button from "../../componets/button/Button";
import { wrap } from "module";

const CategoriesMain = styled.div({
  paddingBottom: "100px",
});

const CategoriesHeading = styled.p({
  fontSize: "39px",
  fontWeight: 600,
});

const Flex = styled.div({
  display: "flex",
  gap: 50,
  "@media(max-width: 768px)": {
    flexDirection: "column",
  },
});

const CategoriesCard = styled.div({
  padding: "50px 0px",
  flex: "1 1 45%",
  "@media(max-width: 1190px)": {
    width: "100%",
  },
  "@media(max-width: 768px)": {
    flex: "1  100%", 
  },
});

const Category = () => {
  return (
    <CategoriesMain>
      <div>
        <CategoriesHeading>Categories</CategoriesHeading>
      </div>
      <CategoryCard name="Categories" image={CategoryImage} />
      <Flex>
        <CategoriesCard style={{ display: "flex", flexWrap: 'wrap' }}>
          <CategoryCard name="Accesso" image={CategorySecFirImage} />
        </CategoriesCard>
        <CategoriesCard>
          <CategoryCard name="Kitchen" image={CategorySecSecImage} />
        </CategoriesCard>
      </Flex>
      <div>
        <CategoryCard name="Kitchen" image={CategoryThirdImage} />
      </div>
    </CategoriesMain>
  );
};

export default Category;