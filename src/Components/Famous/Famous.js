import React from "react";
import {
  Container,
  FamousContainer,
  SectionImages,
  SliderContainer,
} from "./Famous-styles";
import Slider from "react-slick";
import listFamous from "../../utils/listFamous";
import CustomSlide from "./CustomSlide";
import listUnderFamous from "../../utils/listUnderFamous";
import CardImage from "./CardImage";

function Famous() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
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

  return (
    <Container>
      <FamousContainer>
        <h2>مشاهیر دانشگاه</h2>
        <SliderContainer>
          <Slider {...settings}>
            {listFamous.map((item, index) => (
              <CustomSlide url={item.url} name={item.name} />
            ))}
          </Slider>
        </SliderContainer>
        <SectionImages>
          {listUnderFamous.map((item, index) => (
            <CardImage item={item} index={index} />
          ))}
        </SectionImages>
      </FamousContainer>
    </Container>
  );
}

export default Famous;
