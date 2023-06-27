import React from "react";
import { styled } from "styled-components";

function ItemRight({ item, index }) {
  return (
    <Container>
      <div></div>
      <div>{item}</div>
    </Container>
  );
}

export default ItemRight;

const Container = styled.li`
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > :first-child {
    width: 0.5rem;
    height: 0.5rem;
    background-color: #fff;
    border-radius: 100%;
  }
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 992px) {
    justify-content: center;
  }
`;
