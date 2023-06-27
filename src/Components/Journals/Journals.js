import React from "react";
import {
  CardImageContainer,
  Container,
  Journal,
  JournalsContainer,
  SecionImage,
  SectionImage,
  Slide,
  SlideFooter,
  SlideImage,
  SliderContainer,
} from "./Journals-styles";
import listJournals from "../../utils/listJournals";
import Slider from "react-slick";
import listOfImage from "../../utils/listOfImage";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Journals() {
  const CustomDot = ({ onClick, active }) => {
    return (
      <button
        className={active ? "custom-dot active" : "custom-dot"}
        onClick={onClick}
      ></button>
    );
  };
  const settings = {
    dotsClass: "custom-dots",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: (i) => <CustomDot />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  function CustomPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIosNewIcon fontSize="large" style={{ fontWeight: "bold" }} />
      </div>
    );
  }

  function CustomNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIosIcon fontSize="large" style={{ fontWeight: "bold" }} />
      </div>
    );
  }

  return (
    <Container>
      <Journal>
        <JournalsContainer>
          <SliderContainer>
            <Slider {...settings}>
              {listJournals.map((item, index) => (
                <Slide key={index}>
                  <SectionImage>
                    <SlideImage src={item.url} />
                  </SectionImage>
                  <SlideFooter>{item.title}</SlideFooter>
                </Slide>
              ))}
            </Slider>
          </SliderContainer>
          <CardImageContainer>
            {listOfImage.map((item, index) => (
              <SecionImage key={index}>
                <img src={item} alt="" />
              </SecionImage>
            ))}
          </CardImageContainer>
        </JournalsContainer>
      </Journal>
    </Container>
  );
}

export default Journals;
