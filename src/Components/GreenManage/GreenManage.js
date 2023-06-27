import React from "react";
import Slider from "react-slick";
import {
  Container,
  Slide,
  SlideLeft,
  SlideRight,
  SliderContainer,
} from "./GreenManage-styles";
import listGreen from "../../utils/listGreen";

function CustomSlide({ imageURL, caption, title }) {
  return (
    <Slide>
      <SlideRight>
        <img src={imageURL} alt={caption} />
      </SlideRight>
      <SlideLeft>
        <h1>{title}</h1>
        <p>{caption}</p>
        <div className="button">بیشتر بدانیم</div>
      </SlideLeft>
    </Slide>
  );
}

function GreenManage() {
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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <SliderContainer>
        <Slider {...settings}>
          {listGreen.map((item, index) => (
            <CustomSlide
              imageURL={item.url}
              caption={item.caption}
              title={item.title}
              key={index}
            />
          ))}
        </Slider>
      </SliderContainer>
    </Container>
  );
}

export default GreenManage;
