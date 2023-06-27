import React from "react";
import { styled } from "styled-components";

function NavItem({ item, index }) {
  return <Container>{item}</Container>;
}

export default NavItem;

const Container = styled.div`
  text-align: center;
  position: relative;
  font-size: 1rem;
  font-weight: normal;
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -0.5rem;
    right: 0;
    transition: width 0.4s ease;
    width: 0%;
    border-bottom: 3.2px solid #940000;
  }
  &:hover {
    &::after {
      width: 100%;
    }
    color: #940000;
    cursor: pointer;
  }
`;
