import React from "react";
import { styled } from "styled-components";

function Video() {
  return (
    <Container>
      <video
        src="https://tv.ut.ac.ir/upload/homepage/top-video8.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <SectionInfo>
        <h1>شبکه دانشگاه تهــران</h1>
        <h3>شبکه حکمت و فرزانگی، گامی در جهاد تبیین</h3>
        <button>مشاهده</button>
      </SectionInfo>
    </Container>
  );
}

export default Video;

const Container = styled.div`
  > video {
    width: 100%;
    height: 31.188rem;
    object-fit: cover;
  }
  position: relative;
  z-index: -1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background-image: linear-gradient(to bottom, #395aaf, #162d68);
  }
`;

const SectionInfo = styled.section`
  color: white;
  text-align: center;
  position: absolute;
  top: 9rem;
  left: 4rem;
  > :first-child {
    font-size: 2.5rem;
    font-weight: bold;
  }

  > button {
    border: none;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    padding: 0.2rem 8.5rem 0.2rem 8.5rem;
    margin-top: 0.4rem;
  }
`;
