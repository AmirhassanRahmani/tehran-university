import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://ut.ac.ir/assets/75b68afe/images/parallaxes/BG-acievment.png");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-bottom: 1rem;
  }
  padding-bottom: 3rem;
  margin-bottom: 3rem;
`;

export const SectionContainer = styled.div`
  position: relative;
  max-width: 80%;
  margin: 0 auto;
  > h1 {
    color: #132b67;
    font-size: 1.4rem;
    font-weight: bold;
    padding: 2rem 0rem 1rem 0rem;
  }
`;

export const Slide = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1rem;
  max-width: 80rem;
  max-height: 20rem;
  height: 22rem;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const SlideLeft = styled.div`
  flex-basis: 45%;
  @media (max-width: 992px) {
    order: -1;
    height: 11rem;
    width: 100%;
  }
`;

export const SlideRight = styled.div`
  flex-basis: 48%;
  margin-right: 2rem;
  @media (max-width: 992px) {
    height: 11rem;
    width: 95%;
    margin: 0 auto;
  }
`;

export const SlideRightTitle = styled.div`
  color: #132b67;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 0.7rem;
  @media (max-width: 1315px) {
    font-size: 0.9rem;
  }
`;

export const SlideRightInfo = styled.div`
  color: #4d4d4d;
  @media (max-width: 1315px) {
    font-size: 0.8rem;
  }
`;

export const ImageSlide = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SliderContainer = styled.div`
  > :first-child {
    .slick-slide > div > div {
      display: flex !important;
      direction: rtl;
      overflow: hidden;
      &:hover {
        ${ImageSlide} {
          transform: scale(1.05);
        }
      }
    }
    .slick-prev::before {
      display: none;
    }

    .slick-next::before {
      display: none;
    }

    .slick-arrow {
      z-index: 10;
    }

    .slick-prev,
    .slick-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 24px;
      color: #fff;
      cursor: pointer;
    }

    .slick-prev {
      left: 20px;
    }

    .slick-next {
      right: 20px;
    }
  }
`;

export const ArrowLeft = styled.a`
  position: absolute;
  top: -4rem;
  left: -11rem;
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
`;
export const ArrowRight = styled.a`
  position: absolute;
  top: -4rem;
  left: 7rem;
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
`;

export const UnderSlider = styled.div`
  background-color: #fff;
  > h2 {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  padding-right: 3rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const UnderSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const SectionImage = styled.div`
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const CardSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-left: ${(props) => (props.show === 2 ? null : "1px solid #d9d9d9")};
  padding: 1rem 0rem 1rem 1rem;
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: start;
    border-left: none;
    width: 100%;
  }
`;

export const CardSpanContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: start;
    width: 100%;
  }
`;

export const SectionInfo = styled.div`
  margin-top: 1.2rem;
  > :first-child {
    font-size: 1.3rem;
    font-weight: bold;
  }
  > :nth-child(2) {
    font-size: 1rem;
  }
`;

export const ImageContainer = styled.img``;

export const SearchBox = styled.div`
  border: 1px solid #999;
  max-width: 23rem;
  padding: 1rem;
  margin-left: 3rem;
  flex: 1;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const SearchBoxContainer = styled.div`
  > h2 {
    font-size: 1rem;
    color: #2f9aff;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const LiDrop = styled.li`
  border-bottom: 1px solid #0081fb;
  color: #ccc;
  font-size: 1.1rem;
  padding: 1rem 0;
  text-indent: 1rem;
  &:hover {
    transition: all 0.15s ease-in;
    color: #2f9aff;
    background: #fff;
  }
`;

export const UlSectionClick = styled.ul`
  position: absolute;
  left: 0;
  top: 100%;
  background-color: #168eff;
  width: 100%;
  max-height: 18.8rem;
  overflow-y: scroll;
  cursor: pointer;
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const SectionDrop = styled.div`
  position: relative;
  border: 1px solid #999;
  margin-bottom: 0.6rem;
  height: 2rem;
`;

export const SpanIcon = styled.span`
  > :first-child {
    color: #ccc;
    position: relative;
    /* top: 0.2rem; */
    top: ${(props) => (props.up ? "0rem" : "0.2rem")};
  }
`;

export const SectionDropContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  > :first-child {
    color: #ccc;
    font-size: 0.8rem;
  }
`;

export const InputContainer = styled.input`
  border: 0;
  border-left: 1px solid #ccc;
  flex: 1;
  height: 2rem;
  background-color: transparent;
`;

export const SectionSearch = styled.div`
  border: 1px solid #999;
  height: 2rem;
`;

export const SectionInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
