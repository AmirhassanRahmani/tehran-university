import React from "react";
import { styled } from "styled-components";
import { Tooltip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tooltip: {
    backgroundColor: "black",
    fontSize: "0.9rem",
    marginTop: "0.65rem",
  },
  arrow: {
    color: "black",
  },
}));

function IconSection({ item, index }) {
  const classes = useStyles();
  return (
    <Tooltip
      title={item.title}
      arrow
      classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
    >
      <Container index={index}>
        {index === 4 ? <img src={item.icon} /> : <div>{item.icon}</div>}
      </Container>
    </Tooltip>
  );
}

export default IconSection;

const Container = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #132b67;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > img {
    width: 2rem;
    height: 2rem;
    object-fit: fill;
  }
  > div > * {
    color: white;
  }
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.index === 4 ? "#95ccff" : "white")};
    > div > * {
      color: #132b67;
    }
  }
`;
