import React from "react";
import { styled } from "styled-components";
import listIcons from "../../utils/listIcons";
import IconSection from "./IconSection";

function Internte() {
  return (
    <Container>
      <SectionInfo>
        <HeadOne>ما را در شبکه های اجتماعی دنبال کنید :</HeadOne>
        <SectionIcon>
          {listIcons.map((item, index) => (
            <IconSection item={item} index={index} />
          ))}
        </SectionIcon>
      </SectionInfo>
    </Container>
  );
}

export default Internte;

const Container = styled.div`
  background-image: url("https://ut.ac.ir/assets/75b68afe/images/parallaxes/social.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 25rem;
  position: relative;
  padding-top: 8rem;
`;

const SectionInfo = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const HeadOne = styled.h1`
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SectionIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
