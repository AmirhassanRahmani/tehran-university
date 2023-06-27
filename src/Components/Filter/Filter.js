import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Container,
  SliderContainer,
} from "./Filter-styles";
import Slider from "react-slick";
import listFilter from "../../utils/listFilter";
import CustomSlide from "./CustomSlide";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Filter() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    rtl: true,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
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
      <SliderContainer>
        <Slider {...settings}>
          {listFilter.map((item, index) => (
            <CustomSlide url={item.url} title={item.title} />
          ))}
        </Slider>
      </SliderContainer>
    </Container>
  );
}

export default Filter;
