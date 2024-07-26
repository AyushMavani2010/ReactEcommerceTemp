import HeroImage from "../../assets/images/image.png";
import styled from "@emotion/styled";
import Button from "../../componets/button/Button";
import ArrowIcon from "../../componets/ArrowIcon";

const RootContainer = styled.div({
  paddingBottom: "100px",
});

const HeadingContainer = styled.div({
  padding: "0px 0px 0px 100px",
});
const QuestionContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const QuestionNumber = styled.p({
  display: "flex",
  alignItems: "center",
  fontSize: "23px",
  fontWeight: 500,
  gap: 100,
});
const Question = styled.p({});
const Answer = styled.p({
  paddingLeft: "125px",
  fontSize: "18px",
  fontWeight: 400,
});
const HeadingFont = styled.p({
  fontSize: "39px",
  fontWeight: 600,
});
const BorderMain = styled.div(() => ({
  border: "1px solid rgba(217, 217, 217, 1)",
  display: "flex",
  flex: 1,
}));
const Faq = () => {
  return (
    <RootContainer>
      <HeadingContainer>
        <HeadingFont>We have got the answers to your questions</HeadingFont>
        <QuestionContainer>
          <QuestionNumber>
            01
            <Question>What types of furniture do you offer?</Question>
          </QuestionNumber>
          <Button
            width="44px"
            height="44px"
            BgColor="rgba(248, 247, 251, 1)"
            borderRadius="50px"
            color="black"
            border="none"
            icon={<ArrowIcon color="black" />}
          />
        </QuestionContainer>
        <Answer>
          We offer a wide range of contemporary furniture including sofas,
          chairs, tables, beds, storage solutions, and outdoor furniture. Our
          collection is designed to suit modern aesthetics and functional needs.
        </Answer>
        <BorderMain />
      </HeadingContainer>
    </RootContainer>
  );
};

export default Faq;
