import { styled } from "styled-components";

export const Container = styled.div`
  background-image: url("https://ut.ac.ir/assets/75b68afe/images/parallaxes/book.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Journal = styled.div`
  width: 100%;
  margin-right: 17rem;
  @media (max-width: 992px) {
    margin: 0;
  }
`;

export const JournalsContainer = styled.div`
  display: flex;
  gap: 3rem;
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

export const SliderContainer = styled.div`
  background-color: white;
  &:hover {
    .slick-prev,
    .slick-next {
      opacity: 1;
    }
  }
  width: 50%;
  .slick-slide > div {
    margin: 0 0.7rem;
    padding-bottom: 3rem;
  }

  .custom-dots {
    display: flex !important;
    justify-content: center;
    
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

  .slick-arrow {
    z-index: 2;
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
    top: 45%;
    transform: translateY(-50%);
    font-size: 1.625rem;
    color: white;
    padding: 2rem 1rem 2rem 1rem;
    opacity: 0.4;
    cursor: pointer;
    transform: scaleX(-1);
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: gray;
    }
  }

  .slick-prev {
    left: 1.25rem;
  }

  .slick-next {
    right: 1.25rem;
  }

  @media (max-width: 992px) {
    width: 100%;
    margin-top: 4rem;
  }
`;

export const Slide = styled.div`
  margin-top: 2rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  height: 22rem;
  width: 16rem;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const SectionImage = styled.div`
  width: 100%;
  height: 17rem;
  padding: 0.5rem;
  @media (max-width: 992px) {
    width: 30%;
    margin-left: auto;
  }
`;

export const SlideFooter = styled.div`
  color: #007cf1;
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  @media (max-width: 992px) {
    text-align: right;
  }
`;

export const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 992px) {
    gap: 2rem;
    padding: 1rem 4rem;
    /* padding-bottom: 4rem; */

  }
`;

export const SecionImage = styled.div`
  max-width: 25rem;
  max-height: 8rem;
  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
