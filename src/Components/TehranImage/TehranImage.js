import React from "react";
import {
  Container,
  HeadTwo,
  ImageUniv,
  NavTop,
  Section,
  SectionLeft,
  SectionRight,
  TehranBottom,
  TehranBottomLeft,
  TehranBottomRight,
  TehranContainer,
  TehranTop,
  Vocab,
  VocabContainer,
} from "./TehranImage-styles";
import listTehranImage from "../../utils/listTehranImage";
import listOfNav from "../../utils/listOfNav";
import NavItem from "./NavItem";
import listVocab from "../../utils/listVocab";

function TehranImage() {
  return (
    <Container>
      <TehranContainer>
        <TehranTop>
          <ImageUniv src="https://ut.ac.ir/images/www/fa/banner/some-dumb-banners-tour/2023/1678884783-group-213.png" />
        </TehranTop>
        <TehranBottom>
          <TehranBottomRight>
            <HeadTwo>وقایع تاریخی دانشگاه</HeadTwo>
            {listTehranImage.map((item, index) => (
              <Section key={index}>
                <SectionRight>
                  <div>{item.num}</div>
                  <div>{item.month}</div>
                </SectionRight>
                <SectionLeft>
                  <div>{item.info}</div>
                </SectionLeft>
              </Section>
            ))}
          </TehranBottomRight>
          <TehranBottomLeft>
            <NavTop>
              {listOfNav.map((item, index) => (
                <NavItem key={index} index={index} item={item} />
              ))}
            </NavTop>
            <VocabContainer>
              {listVocab.map((item, index) => (
                <Vocab key={index} index={index}>
                  <img src={item} alt="" />
                </Vocab>
              ))}
            </VocabContainer>
          </TehranBottomLeft>
        </TehranBottom>
      </TehranContainer>
    </Container>
  );
}

export default TehranImage;
