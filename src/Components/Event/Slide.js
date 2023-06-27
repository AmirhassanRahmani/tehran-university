import React, { useState } from "react";
import {
  Container,
  ImageContainer,
  ImageSection,
  MoveParag,
  Parag,
  ParagInfo,
  SlideContainer,
} from "./Slide-styles";

function Slide({ item, index }) {
  const [bool, setBool] = useState(false);
  const [grabbing, setGrabbing] = useState(false);

  const handleArrow = () => {
    setBool(true);
  };

  const handleArrowHide = () => {
    setBool(false);
  };

  const handleGrab = () => {
    setGrabbing(true);
  };

  const handleMouse = () => {
    setGrabbing(false);
  };

  return (
    <Container
      onMouseEnter={handleArrow}
      onMouseLeave={handleArrowHide}
      onMouseDown={handleGrab}
      onMouseUp={handleMouse}
      arrow={grabbing}
    >
      <SlideContainer>
        <ImageSection>
          <ImageContainer src={item.url} alt="" SizeImg={bool} />
        </ImageSection>
        <MoveParag>
          <div className="num">{item.num}</div>
          <div className="month">{item.month}</div>
          <div className="year">{item.year}</div>
        </MoveParag>
        <Parag>
          <ParagInfo colorText={bool}>{item.title}</ParagInfo>
        </Parag>
      </SlideContainer>
    </Container>
  );
}

export default Slide;
