import React from "react";
import { styled } from "styled-components";

function CustomSlide({ data }) {
  return (
    <Container>
      <Left>
        <ImageList src={data.url} />
      </Left>
      <Right>
        <Top>{data.number}</Top>
        <Bottom>{data.title}</Bottom>
      </Right>
    </Container>
  );
}

export default CustomSlide;

const Container = styled.div`
  display: grid;
  place-items: center;
  gap: 1rem;
`;

const Left = styled.div`
    margin-bottom: 1rem;
`;

const Right = styled.div`
  display: grid;
  place-items: center;
`;
const Top = styled.span`
  color: white;
  position: relative;
  &::before {
    content: "+";
    position: absolute;
    top: -1.5rem;
    right: -1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #2f9aff;
  }
`;

const Bottom = styled.span`
  color: #2f9aff;
`;

const ImageList = styled.img``;
