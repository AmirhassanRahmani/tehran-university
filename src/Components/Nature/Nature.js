import React, { useState } from "react";
import {
  Container,
  Header,
  ImageContainer,
  ImageList,
  ImageSection,
  List,
  ListContainer,
  ListLeft,
  ListRight,
  MainContainer,
  NatureContainer,
  SliderContainer,
  SpanBottom,
  SpanTop,
  UlListContainer,
} from "./Nature-styles";
import listNature from "../../utils/listNature";
import Slider from "react-slick";
import CustomSlide from "./CustomSlide";

function Nature() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <Container>
      <NatureContainer>
        <Header>نمايه آموزشی دانشگاه</Header>
        <MainContainer>
          <UlListContainer>
            {listNature.map((item, index) => (
              <List key={index} index={index}>
                <ListContainer>
                  <ListRight>
                    <SpanTop>{item.number}</SpanTop>
                    <SpanBottom>{item.title}</SpanBottom>
                  </ListRight>
                  <ListLeft>
                    <ImageList src={item.url} />
                  </ListLeft>
                </ListContainer>
              </List>
            ))}
          </UlListContainer>
          <SliderContainer>
            <Slider {...settings}>
              {listNature.map((item, index) => (
                <CustomSlide key={index} data={item} />
              ))}
            </Slider>
          </SliderContainer>
          <ImageSection>
            <ImageContainer src="https://ut.ac.ir/images/www/fa/banner/study-image-tour/2023/1678722741-img-5793.jpg" />
          </ImageSection>
        </MainContainer>
      </NatureContainer>
    </Container>
  );
}

export default Nature;
