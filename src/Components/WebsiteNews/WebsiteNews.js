import React from "react";

import { styled } from "styled-components";


function WebsiteNews() {
  return (
    <Container>
      <img
        src="	https://ut.ac.ir/images/www/fa/banner/study-image-news/2023/1678717620-1678707247-news-banner.png"
        alt=""
      />
    </Container>
  );
}

export default WebsiteNews;

const Container = styled.div`
  margin: 7rem 0rem 1rem 0rem;
  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
