import React from "react";
import { Container, SpanItem } from "./SpanLan-styles";

function SpanLan({ item, index }) {
  return (
    <Container>
      <SpanItem>{item}</SpanItem>
    </Container>
  );
}

export default SpanLan;
