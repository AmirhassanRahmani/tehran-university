import React, { useState } from "react";
import { styled } from "styled-components";
import EastIcon from "@mui/icons-material/East";

function List({ item, index, backImage, choose, showDark }) {
  const [state, setState] = useState(false);

  const handleUrl = (imageUrl, index) => {
    backImage(imageUrl);
    choose(true);
    showDark(index);
    setState(true);
  };

  const handleChoose = () => {
    choose(false);
    showDark(null);
    setState(false);
  };

  return (
    <Container
      show={index}
      onMouseEnter={() => handleUrl(item.url, index)}
      onMouseLeave={handleChoose}
    >
      <Chart>
        <SpanIcon show={state}>
          <EastIcon />
        </SpanIcon>
        <SpanTitle>{item.title}</SpanTitle>
      </Chart>
    </Container>
  );
}

export default List;

const Container = styled.div`
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 4.5rem;
  border-left: ${(props) =>
    props.show % 2 !== 0 ? "none" : "1px dashed white"};
  border-bottom: 1px dashed white;
  text-align: center;

  &:hover {
    background-color: #940000;
    cursor: pointer;
  }

  @media (max-width: 992px) {
    padding: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 0;
  }
`;

const Chart = styled.div`
  word-break: break-word;
  width: 13.1rem;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const SpanIcon = styled.span`
  position: relative;
  left: 0.3rem;
  top: 0.5rem;
  display: ${(props) => (props.show ? "inline" : "none")};
`;

const SpanTitle = styled.span``;
