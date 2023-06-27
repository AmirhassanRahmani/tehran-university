import { styled } from "styled-components";

export const Container = styled.div`
  background-image: url("https://ut.ac.ir/assets/75b68afe/images/parallaxes/BG-UT.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5rem 0;
`;

export const SectionContainer = styled.div`
  max-width: 85%;
  margin: 2rem auto;
`;

export const SectionTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const SectionBottom = styled.div`
  > img {
    border: 1px solid black;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
