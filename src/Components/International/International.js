import React, { useState } from "react";
import {
  Container,
  SectionBottom,
  SectionContainer,
  SectionTop,
} from "./International-styles";
import listCardTop from "../../utils/listCradTop";
import Card from "./Card";
import { useInView } from "react-hook-inview";

function International() {
  const [check, setCheck] = useState(false);
  const [ref, inView] = useInView({
    threshold: 1,
    onEnter: () => setCheck(true),
    onLeave: () => setCheck(false),
  });

  return (
    <Container>
      <SectionContainer>
        <SectionTop>
          {listCardTop.map((item, index) => (
            <Card key={index} item={item} index={index} check={check} />
          ))}
        </SectionTop>
        <SectionBottom ref={ref}>
          <img
            src="https://ut.ac.ir/images/www/fa/banner/study-image-single/2023/1678721867-1678103842-banner-international-students.jpg"
            alt=""
          />
        </SectionBottom>
      </SectionContainer>
    </Container>
  );
}

export default International;
