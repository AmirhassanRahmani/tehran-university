import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Container,
  EventBtn,
  ShoolsContainer,
  SliderContainer,
} from "./Event-styles";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Slide from "./Slide";
import listEvents from "../../utils/listEvents";

function Event() {
  const settings = {
    rtl: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function CustomPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowLeft>
          <ArrowBackIosIcon fontSize="large" className="icon" />
        </ArrowLeft>
      </div>
    );
  }

  function CustomNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowRight>
          <ArrowBackIosIcon fontSize="large" className="icon" />
        </ArrowRight>
      </div>
    );
  }
  return (
    <Container>
      <ShoolsContainer>
        <h1>رویــــدادها</h1>
        <SliderContainer>
          <Slider {...settings}>
            {listEvents.map((item, index) => (
              <Slide item={item} index={index} />
            ))}
          </Slider>
        </SliderContainer>
        <EventBtn>سایــر رویــدادها</EventBtn>
      </ShoolsContainer>
    </Container>
  );
}

export default Event;
