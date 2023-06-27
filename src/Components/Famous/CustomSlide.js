import React, { useState } from "react";
import { styled } from "styled-components";

function CustomSlide({ url, name }) {
  const [state, setState] = useState(false);
  const handlePosition = () => {
    setState(true);
  };
  const handleLocation = () => {
    setState(false);
  };
  return (
    <Slide
      up={state}
      onMouseEnter={handlePosition}
      onMouseLeave={handleLocation}
    >
      <SectionImage around={state}>
        <img src={url} alt="" />
      </SectionImage>
      <SectionName>{name}</SectionName>
    </Slide>
  );
}

export default CustomSlide;

const Slide = styled.div`
  display: grid;
  place-items: center;
  cursor: pointer;
  padding-top: 1rem;
  position: relative;
  top: ${(props) => (props.up ? "-1rem" : "0rem")};
`;

const SectionImage = styled.div`
  > img {
    border: ${(props) =>
      props.around ? " 0.6rem solid #940000" : " 0.6rem solid #fff"};
    border-radius: 50%;
  }
  padding-bottom: 0.5rem;
`;

const SectionName = styled.div``;
