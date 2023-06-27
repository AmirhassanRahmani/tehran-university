import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
`;

export const ShoolsContainer = styled.div`
  position: relative;
  max-width: 82%;
  margin: 0 auto;
  > h1 {
    font-size: 1.5rem;
    margin: 3rem 0rem 2rem 0rem;
  }
`;

export const SliderContainer = styled.div`
  .slick-slider {
    position: static;
  }

  .slick-slide > div {
    margin: 0 1.3rem;
  }

  .slick-arrow {
    z-index: 10;
  }

  .slick-arrow:before {
    font-size: 5rem;
  }

  .slick-prev::before {
    display: none;
  }

  .slick-next::before {
    display: none;
  }
`;

export const ArrowLeft = styled.a`
  position: absolute;
  top: -4rem;
  left: -8rem;
  width: 6rem;
  height: 8rem;
  background-color: transparent !important;
  padding: 6rem 0.3rem 6rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  &:hover {
    cursor: pointer;
    .icon {
      color: #2f9aff;
    }
  }
  &:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
  .icon {
    color: #ccc;
    font-size: 5rem !important;
    position: relative;
  }

  @media (max-width: 992px) {
    left: -3rem;
  }
`;

export const ArrowRight = styled.a`
  position: absolute;
  top: -4rem;
  right: -8rem;
  width: 6rem;
  height: 8rem;
  transform: scaleX(-1);
  background-color: transparent !important;
  padding: 6rem 0.3rem 6rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  &:hover {
    cursor: pointer;
    .icon {
      color: #2f9aff;
    }
  }
  &:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
  .icon {
    color: #ccc;
    font-size: 5rem !important;
    position: relative;
  }

  @media (max-width: 992px) {
    right: -3rem;
  }
`;
