import { styled } from "styled-components";

export const Container = styled.div`
  background-image: url("https://ut.ac.ir/assets/75b68afe/images/parallaxes/BG-fam.png?1677077928");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  padding-top: 7rem;
  padding-bottom: 3rem;
  margin-top: 3rem;
`;

export const FamousContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  > h2 {
    color: #132b67;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  @media (max-width: 992px) {
    max-width: 90%;
  }
`;

export const SliderContainer = styled.div`
  border: 10px solid #fff;
  padding: 4rem 0 4rem 0;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const SectionImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
