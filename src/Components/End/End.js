import React from "react";
import { styled } from "styled-components";

function End() {
  return (
    <Container>
      <Right>© کلیه حقوق متعلق به دانشگاه تهران است.</Right>
      <Left>
        <span>توسعه و طراحی: </span>
        <span>
          <small>A.C.A CO</small>
        </span>
      </Left>
    </Container>
  );
}

export default End;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 6rem 1rem 6rem;
`;

const Right = styled.div``;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  > :nth-child(2) {
    color: #2f9aff;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
