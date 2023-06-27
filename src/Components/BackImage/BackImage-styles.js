import { styled } from "styled-components";

export const Container = styled.div`
  background-image: url(${(props) =>
    props.check
      ? props.imageShow
      : "https://ut.ac.ir/images/www/fa/link/academics-link/2023/1678719667-dsc00090.jpg"});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 992px) {
    display: block;
  }
`;

export const MiddleContainer = styled.div`
  flex-basis: 50%;
  flex-grow: 1;
  margin: 0 auto;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const ContentTemplate = styled.div``;

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 992px) {
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;

export const ShowSection = styled.div`
  flex-basis: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.9;
  height: 100vh;
  @media (max-width: 992px) {
    background-color: transparent;
    height: auto;
    width: 100%;
  }
`;

export const HeadTwo = styled.h2``;

export const Div = styled.div``;

export const Dark = styled.div`
  color: white;
  width: 20rem;
  margin: 12rem auto;
  text-align: right;
  transition: all 0.4s ease;
  display: ${(props) => (props.index === props.selected ? "block" : "none")};
  @media (max-width: 992px) {
    margin: 1rem auto;
    width: 70%;
    text-align: justify;
  }
`;

export const HeadTitle = styled.h1`
  color: white;
  margin-right: 12rem;
  margin-top: 10rem;
  font-weight: 600;
  font-size: 1.5rem;
  display: ${(props) => (props.showTitle ? "none" : "block")};
  @media (max-width: 992px) {
    margin-right: 4rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
`;
