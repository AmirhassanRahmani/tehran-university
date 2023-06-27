import { styled } from "styled-components";

export const Container = styled.div`
  cursor: ${(props) => (props.arrow ? "grab" : null)};
`;

export const SlideContainer = styled.div`
  /* width: 20rem; */
  height: 29rem;
  margin-bottom: 4rem;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.35);
  overflow: hidden;
`;

export const ImageSection = styled.div`
  height: 80%;
  background-image: linear-gradient(to top, #2f9aff, #132b67);
  overflow: hidden;
`;

export const ImageContainer = styled.img`
  opacity: ${(props) => (props.SizeImg ? "0.1" : "1")};
  width: 100%;
  height: 100%;
  transition: transform 0.4s ease;
  transform: ${(props) => (props.SizeImg ? "scale(1.01)" : null)};
`;

export const ParagInfo = styled.div`
  z-index: 2;
  color: ${(props) => (props.colorText ? "white" : "#4d4d4d")};
  transition: all 0.4s ease;
  top: ${(props) => (props.colorText ? "-3rem" : "2rem")};
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  position: relative;
`;

export const ParagArrow = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  > :first-child {
    font-size: 4rem !important;
    color: #2f9aff;
  }
  text-align: center;
`;

export const Parag = styled.div``;
