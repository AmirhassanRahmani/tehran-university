import React from "react";
import {
  Container,
  Info,
  Slide,
  SlideLeft,
  SlideRight,
  SlideRightContent,
  SliderContainer,
  Title,
} from "./Shooting-styles";
import listShooting from "../../utils/listShooting";
import Slider from "react-slick";

function Shooting() {
  const CustomDot = ({ onClick, active }) => {
    return (
      <button
        className={active ? "custom-dot active" : "custom-dot"}
        onClick={onClick}
      ></button>
    );
  };
  const settings = {
    dots: true,
    dotsClass: "custom-dots",
    customPaging: (i) => <CustomDot />,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <SliderContainer>
        <Slider {...settings}>
          {listShooting.map((item, index) => (
            <Slide>
              <SlideRight>
                <SlideRightContent>
                  <Title>{item.title}</Title>
                  <Info>{item.info}</Info>
                </SlideRightContent>
              </SlideRight>
              <SlideLeft>
                <img src={item.url} alt="" />
              </SlideLeft>
            </Slide>
          ))}
        </Slider>
      </SliderContainer>
    </Container>
  );
}

export default Shooting;
