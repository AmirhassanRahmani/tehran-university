import { styled } from "styled-components";

export const Container = styled.div`
  background-image: url("https://ut.ac.ir/assets/75b68afe/images/parallaxes/BG-tour.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  margin-top: 3rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
`;

export const TehranContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

export const TehranTop = styled.div``;

export const TehranBottom = styled.div`
  display: flex;
  gap: 1.7rem;
  margin-top: 1.8rem;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ImageUniv = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const TehranBottomRight = styled.div`
  background-color: #fff;
  flex-basis: 28%;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TehranBottomLeft = styled.div`
  flex-basis: 70%;
`;

export const HeadTwo = styled.h2`
  color: #940000;
  font-weight: normal;
  font-size: 1.3rem;
  margin-left: auto;
  margin-right: 1.5rem;
  @media (max-width: 992px) {
    margin: 0;
    text-align: center;
  }
`;

export const Section = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  width: 22rem;
  min-height: 8rem;
  border: 1px solid #ccc;
  margin-top: 1rem;
  padding: 1rem;
  @media (max-width: 992px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const SectionRight = styled.div`
  padding-left: 1rem;
  > :first-child {
    font-weight: bold;
    color: #940000;
  }
  > :last-child {
    color: #940000;
    font-size: 1.1rem;
  }
  border-left: 1px solid #ccc;

  &:hover {
    border-left: 1px solid black;
    > * {
      color: #601514;
    }
  }

  @media (max-width: 992px) {
    border-left: none;
    order: 2;
    text-align: center;
  }
`;

export const SectionLeft = styled.div`
  padding-right: 1rem;
  > div {
    color: #3b3b3b;
  }
`;

export const NavTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 4rem 2rem;
  @media (max-width: 992px) {
    display: grid;
    place-items: center;
  }
`;

export const VocabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Vocab = styled.div`
  margin-top: 2rem;
  width: 48%;
  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border: 2px solid #fff;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: ${(props) => (props.index === 0 ? "2rem" : "0rem")};
  }
`;
