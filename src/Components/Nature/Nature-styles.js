import { styled } from "styled-components";

export const Container = styled.div`
  background-image: url("https://ut.ac.ir/assets/75b68afe/images/parallaxes/BG-statistics.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 2rem;
`;

export const NatureContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  padding: 3rem;
  padding-top: 7rem;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Header = styled.h1`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    display: block;
  }
`;

export const UlListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  width: 52%;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const SliderContainer = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #2f9aff;
  }
`;

export const ImageSection = styled.div`
  @media (max-width: 992px) {
    width: 25rem;
    margin-top: 4rem;
  }

  @media (max-width: 600px) {
    width : 100%;
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  padding: 3rem;
  border-bottom: ${(props) => (props.index <= 3 ? "2px dashed #2f9aff" : null)};
  border-left: ${(props) =>
    props.index % 2 === 0 ? "2px dashed #2f9aff" : null};
  justify-content: flex-end;
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  top: 1rem;
  left: -1rem;
`;

export const ListRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListLeft = styled.div``;

export const ImageList = styled.img`
  margin-right: 1rem;
`;

export const SpanTop = styled.span`
  color: white;
  position: relative;
  font-size: 1.7rem;
  font-weight: 600;
  margin-right: auto;
  &::before {
    content: "+";
    position: absolute;
    top: -2rem;
    right: 0;
    font-size: 1.7rem;
    font-weight: bold;
    color: #2f9aff;
  }
`;

export const SpanBottom = styled.span`
  color: #2f9aff;
  font-size: 1.2rem;
  font-weight: 600;
`;
