import React, { useRef, useState } from "react";
import {
  Container,
  ContentTemplate,
  Dark,
  Div,
  HeadTitle,
  HeadTwo,
  ListContainer,
  MiddleContainer,
  ResContainer,
  ShowSection,
} from "./BackImage-styles";
import listBackground from "../../utils/listBackground";
import List from "./List";

function BackImage() {
  const [getUrl, setGetUrl] = useState(false);
  const [bool, setBool] = useState(false);
  const [selected, setselected] = useState(null);

  return (
    <Container imageShow={getUrl} check={bool}>
        <ShowSection>
          <HeadTitle showTitle={bool}>پذیرش دانشجویی</HeadTitle>
          {listBackground.map((item, index) => (
            <Dark key={index} selected={selected} index={index}>
              <HeadTwo>{item.title}</HeadTwo>
              <Div>{item.info}</Div>
            </Dark>
          ))}
        </ShowSection>
        <MiddleContainer>
          <ContentTemplate>
            <ListContainer>
              {listBackground.map((item, index) => (
                <List
                  key={index}
                  item={item}
                  index={index}
                  backImage={setGetUrl}
                  choose={setBool}
                  showDark={setselected}
                />
              ))}
            </ListContainer>
          </ContentTemplate>
        </MiddleContainer>
    </Container>
  );
}

export default BackImage;
