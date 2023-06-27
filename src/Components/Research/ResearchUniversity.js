import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CardSpan,
  CardSpanContainer,
  Container,
  ImageContainer,
  ImageSlide,
  InputContainer,
  LiDrop,
  SearchBox,
  SearchBoxContainer,
  SectionContainer,
  SectionDrop,
  SectionDropContainer,
  SectionInfo,
  SectionInput,
  SectionSearch,
  Slide,
  SlideLeft,
  SlideRight,
  SlideRightInfo,
  SlideRightTitle,
  SliderContainer,
  SpanIcon,
  UlSectionClick,
  UnderSlider,
  UnderSliderContainer,
  SectionImage
} from "./ResearchUniversity-styles";

import listResearch from "../../utils/listResearch";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import listSpanImage from "../../utils/listSpanImage";
import listDropDown from "../../utils/listDropDown";

function ResearchUniversity() {
  const [bool, setBool] = useState(false);
  const [select, setSelect] = useState("همه موارد");
  const handleUl = () => {
    setBool(!bool);
  };

  const handleTitle = (item) => {
    setSelect(item);
    setBool(false);
  };
  const settings = {
    rtl: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
      <SectionContainer>
        <h1>دستاوردهای پژوهــشی دانــشگاه</h1>
        <SliderContainer>
          <Slider {...settings}>
            {listResearch.map((item, index) => (
              <Slide key={index}>
                <SlideRight>
                  <SlideRightTitle>{item.title}</SlideRightTitle>
                  <SlideRightInfo>{item.info}</SlideRightInfo>
                </SlideRight>
                <SlideLeft>
                  <ImageSlide src={item.url} />
                </SlideLeft>
              </Slide>
            ))}
          </Slider>
        </SliderContainer>
        <UnderSlider>
          <h2>فعالیت های پژوهشی دانشگاه</h2>
          <UnderSliderContainer>
            <CardSpanContainer>
              {listSpanImage.map((item, index) => (
                <CardSpan key={index} show={index}>
                  <SectionImage>
                    <ImageContainer src={item.url} />
                  </SectionImage>
                  <SectionInfo>
                    <p>{item.num}</p>
                    <p>{item.info}</p>
                  </SectionInfo>
                </CardSpan>
              ))}
            </CardSpanContainer>
            <SearchBox>
              <SearchBoxContainer>
                <h2>جستجو در رخ نمای دانشگاه تهران :</h2>

                <SectionDrop>
                  <SectionDropContainer onClick={handleUl}>
                    <span>{select}</span>
                    <SpanIcon up={bool}>
                      <ArrowDropDownIcon />
                    </SpanIcon>
                  </SectionDropContainer>
                  <UlSectionClick show={bool}>
                    {listDropDown.map((item, index) => (
                      <LiDrop key={index} onClick={() => handleTitle(item)}>
                        {item}
                      </LiDrop>
                    ))}
                  </UlSectionClick>
                </SectionDrop>

                <SectionSearch>
                  <SectionInput>
                    <InputContainer type="text" />
                    <SearchIcon />
                  </SectionInput>
                </SectionSearch>
              </SearchBoxContainer>
            </SearchBox>
          </UnderSliderContainer>
        </UnderSlider>
      </SectionContainer>
    </Container>
  );
}

export default ResearchUniversity;
