import { styled } from "styled-components";

export const Container = styled.div`
  cursor: ${(props) => (props.arrow ? "grab" : null)};
`;

export const MoveParag = styled.div`
  width: 4.5rem;
  height: 6rem;
  background-color: white;
  position: absolute;
  top: 23.5rem;
  left: 1rem;
  display: grid;
  place-items: center;
  box-shadow: 0 0 20px #000;
  padding: 1rem;
  .num {
    font-size: 0.8rem;
    border-bottom: 1px solid gray;
    text-align: center;
    width: 100%;
  }
  .month {
    font-size: 0.8rem;
    border-bottom: 1px solid gray;
    text-align: center;
    width: 100%;
  }
  .year {
    font-size: 0.8rem;
  }
`;

export const SlideContainer = styled.div`
  height: 35rem;
  margin-bottom: 4rem;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.35);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  &:hover {
    ${MoveParag} {
      transition: all 0.2s ease;
      top: 22rem;
    }
  }
`;

export const ImageSection = styled.div`
  height: 80%;
  background-image: linear-gradient(to bottom, #940000, #4a0000);
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
  color: #4d4d4d;
  transition: all 0.4s ease;
  top: 2rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  position: relative;
`;

export const Parag = styled.div``;
