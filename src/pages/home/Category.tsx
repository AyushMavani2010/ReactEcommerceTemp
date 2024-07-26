import React from "react";
import styled from "@emotion/styled";
import ArrowRight from "../../componets/ArrowIcon";

import CategoryImage from "../../assets/images/Image.png";
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
});
const CategoriesCard = styled.div({
  flex: 6,
  padding: "50px 0px",
});

const Category = () => {
  return (
    <CategoriesMain>
      <div>
        <CategoriesHeading>Categories</CategoriesHeading>
      </div>
      <CategoryCard name="Categories" image={CategoryImage} />
      <Flex>
        <CategoriesCard>
          <CategoryCard name="Accessories" image={CategorySecFirImage} />
        </CategoriesCard>
        <CategoriesCard>
          <CategoryCard name="Kitchen" image={CategorySecSecImage} />
        </CategoriesCard>
      </Flex>
      <CategoryCard name="Kitchen" image={CategoryThirdImage} />
    </CategoriesMain>
  );
};

export default Category;
