import HeroImage from "../../assets/images/image.png";
import styled from "@emotion/styled";
import Button from "../../componets/button/Button";
import ArrowDown from "../../componets/ArrowDown";
import ArrowUp from "../../componets/ArrowUp";

const RootContainer = styled.div({
  paddingBottom: "100px",
});

const HeadingContainer = styled.div({
  padding: "0px 0px 0px 100px",
});
const QuestionContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  padding: "25px 0px 25px 0px ",
  alignItems: "center",
  gap: 100,
});
const QuestionChildRoot = styled.div({
  display: "flex",
  gap: 100,
});
const QuestionNumber = styled.p({
  fontSize: "23px",
  fontWeight: 500,
});
const Question = styled.p({ fontSize: "23px", fontWeight: 500 });
const Answer = styled.p({
  fontSize: "18px",
  fontWeight: 400,
});
const HeadingFont = styled.p({
  fontSize: "39px",
  fontWeight: 600,
});
const BorderMain = styled.div(() => ({
  border: "1px solid rgba(217, 217, 217, 1)",
}));
const Faq = () => {
  return (
    <RootContainer>
      <HeadingContainer>
        <HeadingFont>We have got the answers to your questions</HeadingFont>
        <QuestionContainer>
          <QuestionChildRoot>
            <QuestionNumber>01</QuestionNumber>
            <Question>
              What types of furniture do you offer?
              <Answer>
                We offer a wide range of contemporary furniture including sofas,
                chairs, tables, beds, storage solutions, and outdoor furniture.
                Our collection is designed to suit modern aesthetics and
                functional needs.
              </Answer>
            </Question>
          </QuestionChildRoot>
          <Button
            width="44px"
            height="44px"
            BgColor="rgba(248, 247, 251, 1)"
            borderRadius="50px"
            color="black"
            border="none"
            icon={<ArrowDown color="black" size={25} />}
          />
        </QuestionContainer>
        <BorderMain />

        <QuestionContainer>
          <QuestionChildRoot>
            <QuestionNumber>02</QuestionNumber>
            <Question>Do you offer international shipping?</Question>
          </QuestionChildRoot>
          <Button
            width="44px"
            height="44px"
            BgColor="rgba(248, 247, 251, 1)"
            borderRadius="50px"
            color="black"
            border="none"
            icon={<ArrowUp color="black" size={25} />}
          />
        </QuestionContainer>
        <BorderMain />
        <QuestionContainer>
          <QuestionChildRoot>
            <QuestionNumber>03</QuestionNumber>
            <Question>What is your return policy?</Question>
          </QuestionChildRoot>
          <Button
            width="44px"
            height="34px"
            BgColor="rgba(248, 247, 251, 1)"
            borderRadius="50px"
            color="black"
            border="none"
            icon={<ArrowUp color="black" size={25} />}
          />
        </QuestionContainer>
        <BorderMain />
        <QuestionContainer>
          <QuestionChildRoot>
            <QuestionNumber>04</QuestionNumber>
            <Question>
              What payment methods do you accept?
              <Answer>
                We offer a wide range of contemporary furniture including sofas,
                chairs, tables, beds, storage solutions, and outdoor furniture.
                Our collection is designed to suit modern aesthetics and
                functional needs.
              </Answer>
            </Question>
          </QuestionChildRoot>
          <Button
            width="44px"
            height="44px"
            BgColor="rgba(248, 247, 251, 1)"
            borderRadius="50px"
            color="black"
            border="none"
            icon={<ArrowDown color="black" size={25} />}
          />
        </QuestionContainer>
        <BorderMain />
      </HeadingContainer>
    </RootContainer>
  );
};

export default Faq;
