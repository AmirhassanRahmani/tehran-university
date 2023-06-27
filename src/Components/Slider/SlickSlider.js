import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import listSlickSlider from "../../utils/listSlickSlider";
import { Container } from "./SlickSlider-styles";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function SlickSlider() {
  const settings = {
    // autoplay: true,
    // autoplaySpeed: 1000,
    rtl: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  function CustomPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <KeyboardArrowLeftIcon
          fontSize="large"
          style={{ fontWeight: "bold" }}
        />
      </div>
    );
  }

  function CustomNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <KeyboardArrowRightIcon
          fontSize="large"
          style={{ fontWeight: "bold" }}
        />
      </div>
    );
  }
  return (
    <Container>
      <Slider {...settings}>
        {listSlickSlider.map((item, index) => (
          <div key={index}>
            <img src={item} alt="" />
          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default SlickSlider;
