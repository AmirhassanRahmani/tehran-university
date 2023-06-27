import React, { useState } from "react";
import { styled } from "styled-components";

function CustomSlide({ url, title }) {
  const [state, setState] = useState(false);
  const handlePosition = () => {
    setState(true);
  };
  const handleLocation = () => {
    setState(false);
  };
  return (
    <Slide
      grayFilter={state}
      onMouseEnter={handlePosition}
      onMouseLeave={handleLocation}
    >
      <SectionTop>
        <ColorImage src={url} alt="" />
      </SectionTop>
      <SectionBottom>
        <Title>{title}</Title>
      </SectionBottom>
    </Slide>
  );
}

export default CustomSlide;

const ColorImage = styled.img`
  transition: filter 0.3s ease;
  filter: grayscale(100%);
`;

const SectionTop = styled.div``;

const Title = styled.div`
  position: relative;
  padding-bottom: 0.5rem;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    transition: width 0.3s ease;
    width: 0%;
    border-bottom: 3.2px solid #09f;
  }
`;

const SectionBottom = styled.div`
  text-align: center;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 11rem; */
  &:hover {
    ${ColorImage} {
      filter: grayscale(0%);
    }
    ${Title} {
      &::after {
        width: 100%;
      }
    }
  }
`;
