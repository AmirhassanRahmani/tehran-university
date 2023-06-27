import { styled } from "styled-components";

export const Container = styled.div`
  background-image: url("https://ut.ac.ir/assets/75b68afe/images/parallaxes/BG-lifeStu.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 992px) {
    padding: 5rem 3rem 8rem 3rem;
  }
  @media (max-width: 600px) {
    padding: 0.4rem;
    padding-top: 5rem;
  }
`;

export const SliderContainer = styled.div`
  max-width: 88%;
  margin: 0 auto;
  cursor: pointer;

  @media (max-width: 1200px) {
    max-width: 99%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }

  .slick-slide > div > div {
    display: flex !important;
    justify-content: space-between;
  }

  .slick-slide > div {
    margin: 0 3rem;
    direction: rtl !important;
  }

  .custom-dots {
    display: flex !important;
    justify-content: center;
    margin-top: 20px;
  }

  .custom-dot {
    width: 0.625rem;
    height: 0.28rem;
    background-color: #ccc;
    border: none;
    border-radius: 1rem;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .slick-active .custom-dot {
    background-color: #2f9aff;
    width: 3.75rem;
  }
`;

export const Slide = styled.div`
  display: flex;
  background-color: #fff;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 992px) {
    background-color: transparent;
  }
  @media (max-width: 600px) {
    background-color: #fff;
  }
`;

export const SlideRightContent = styled.div`
  line-height: 1.5rem;
  padding: 2.9rem;
  padding-top: 4rem;
  @media (max-width: 992px) {
    padding: 0;
    padding-top: 1rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 0.5rem;
  }
`;

export const Title = styled.div`
  color: #2f9aff;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  @media (max-width: 992px) {
    margin-bottom: 0.5rem;
  }
  @media (max-width: 768px) {
    font-weight: normal;
    font-size: 0.9rem;
  }
`;

export const Info = styled.div`
  color: #4d4d4d;
  font-size: 0.9rem;
  text-align: justify;
`;

export const SlideRight = styled.div`
  flex-basis: 30%;
`;

export const SlideLeft = styled.div`
  flex-basis: 70%;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 992px) {
    order: -1;
  }
`;
