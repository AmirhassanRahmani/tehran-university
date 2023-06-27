import { styled } from "styled-components";

export const Container = styled.span`
  @media (max-width: 992px) {
    display: none;
  }
`;

export const SpanItem = styled.span`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    right: -0.188rem;
    bottom: 0;
    border-right: 3px solid #fff;
    border-bottom: 3px solid #fff;
    height: 0.55rem;
    width: 0.55rem;
    transition: all 0.35s ease;
    opacity: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0.188rem;
    height: 0.55rem;
    width: 0.55rem;
    border-left: 3px solid #fff;
    border-top: 3px solid #fff;
    transition: all 0.35s ease;
    opacity: 0;
  }

  &:hover {
    cursor: pointer;
    &::before {
      transform: translate(100%, 50%);
      opacity: 1;
    }
    &::after {
      transform: translate(-100%, -50%);
      opacity: 1;
    }
  }
`;

export const SpanArrows = styled.div``;
