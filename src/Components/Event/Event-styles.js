import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
`;

export const ShoolsContainer = styled.div`
  position: relative;
  max-width: 86%;
  margin: 0 auto;
  > h1 {
    font-size: 2rem;
    margin: 3rem 0rem 2rem 0rem;
  }
`;

export const SliderContainer = styled.div`
  .slick-slider {
    position: static;
  }

  .slick-slide > div {
    /* margin: 0 0.6rem; */
    margin: 0 0.9rem;
  }

  .slick-arrow {
    z-index: 10;
  }

  .slick-prev::before {
    display: none;
  }

  .slick-next::before {
    display: none;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    top: 47%;
    transform: translateY(-50%);
    font-size: 24px;
    color: red;
    cursor: pointer;
  }
`;

export const ArrowLeft = styled.a`
  position: absolute;
  top: -4rem;
  left: -6rem;
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
  right: -6rem;
  transform: scaleX(-1);
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
    right: -3rem;
  }
`;

export const EventBtn = styled.div`
  width: 20rem;
  text-align: center;
  border: 1px solid #999;
  color: #999;
  margin-right: auto;
  padding: 0.2rem;
`;
