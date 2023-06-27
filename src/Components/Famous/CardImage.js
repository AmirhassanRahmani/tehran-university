import React, { useState } from "react";
import { styled } from "styled-components";

function CardImage({ item, index }) {
  const [state, setState] = useState(false);
  const handlePosition = () => {
    setState(true);
  };
  const handleLocation = () => {
    setState(false);
  };
  return (
    <Container onMouseEnter={handlePosition} onMouseLeave={handleLocation}>
      <SectionImage indent={state}>
        <img src={item.url} alt="" />
        <p>{item.title}</p>
      </SectionImage>
    </Container>
  );
}

export default CardImage;

const Container = styled.div``;

const SectionImage = styled.div`
  position: relative;
  width: 24rem;
  height: 12rem;
  background-color: #fff;
  margin-top: 1.5rem;

  @media (max-width: 1200px) {
    width: 100%;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: padding 0.3s ease;
    padding: ${(props) => (props.indent ? "0.7rem" : "0rem")};
  }
  > p {
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    color: white;
    font-weight: bold;
  }
`;
