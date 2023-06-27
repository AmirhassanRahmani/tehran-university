import { styled } from "styled-components";

export const Container = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-color: #f2f2f2;
  cursor: pointer;
`;

export const SliderContainer = styled.div`
  max-width: 86%;
  margin: 0 auto;
  /* @media (max-width: 992px) {
    max-width: 60%;
  } */
  .slick-prev::before {
    display: none;
  }
  .slick-next::before {
    display: none;
  }

  .slick-dots li {
    display: none;
    @media (max-width: 992px) {
      display: inline-block;
    }
  }

  .slick-dots li.slick-active button::before {
    color: #2f9aff;
  }
`;

export const ArrowLeft = styled.a`
  position: absolute;
  top: -5.5rem;
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
    display: none;
  }
`;

export const ArrowRight = styled.a`
  position: absolute;
  top: -5.5rem;
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
    display: none;
  }
`;
