import React, { useState } from "react";
import { styled } from "styled-components";

function ListStick({ item, index }) {
  const [hovImage, setHovImage] = useState(false);
  const handleImage = () => {
    setHovImage(true);
  };
  const handleImageHide = () => {
    setHovImage(false);
  };
  return (
    <Container
      item={item.url}
      itemTwo={item.hovUrl}
      key={index}
      show={hovImage}
      onMouseEnter={handleImage}
      onMouseLeave={handleImageHide}
    >
      <Parag showParag={hovImage}>{item.title}</Parag>
    </Container>
  );
}

export default ListStick;

const Parag = styled.p`
  height: 1.9rem;
  background-color: #2f9aff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0.2rem 0.3rem 0.4rem 0.3rem;
  font-size: 0.9rem;
  display: none;
`;

const Container = styled.li`
  display: flex;
  margin-bottom: 0.1rem;
  &::before {
    content: "";
    background-image: url(${(props) =>
      props.show ? props.itemTwo : props.item});
      background-repeat: no-repeat;
      background-position: center;
      width: 1.9rem;
      height: 1.9rem;
      background-color: ${(props) => (props.show ? "#2f9aff" : "#fff")};
      color: #fff;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
  }

  &:hover {
    cursor: pointer;
    ${Parag} {
      display: block;
    }
  }
`;
