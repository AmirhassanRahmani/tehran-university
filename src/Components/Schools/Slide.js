import React, { useState } from "react";
import {
  Container,
  ImageContainer,
  ImageSection,
  Parag,
  ParagArrow,
  ParagInfo,
  SlideContainer,
} from "./Slide-styles";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        <Parag>
          <ParagInfo colorText={bool}>{item.title}</ParagInfo>
          <ParagArrow show={bool}>
            <KeyboardArrowDownIcon />
          </ParagArrow>
        </Parag>
      </SlideContainer>
    </Container>
  );
}

export default Slide;
