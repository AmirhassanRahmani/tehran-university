import { styled } from "styled-components";

export const Container = styled.div`
  padding: 2.5rem 4rem;
  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }
`;

export const SliderContainer = styled.div`
  max-width: 94%;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.35);
  .custom-dots {
    display: flex !important;
    justify-content: center;
    position: absolute;
    left: 50%;
    bottom: -2rem;
  }

  .custom-dot {
    width: 0.9rem;
    height: 0.3rem;
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
  direction: rtl !important;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding-bottom: 1.5rem;
  }
`;

export const SlideRight = styled.div`
  flex-basis: 70%;
  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SlideLeft = styled.div`
  flex-basis: 30%;
  padding: 0 3rem;
  > h1 {
    color: #277d00;
    font-size: 1.5rem;
    @media (max-width: 1024px) {
      color: #2f9aff;
      font-size: 1rem;
      padding: 0.4rem 0;
    }
  }
  > p {
    text-align: justify;
    font-size: 0.9rem;
    margin: 1rem 0;
    @media (max-width: 1024px) {
      margin-top: 0;
    }
  }
  .button {
    border: 1px solid #ccc;
    text-align: center;
    @media (max-width: 1024px) {
      width: 30%;
    }
    @media (max-width: 500px) {
      width: 60%;
    }
  }
`;
