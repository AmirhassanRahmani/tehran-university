import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import listArrow from "../../utils/listArrow";
import { UserContext } from "../../App";

function Card({ item, index, check }) {
  const [selected, setSelected] = useState("انتخاب پردیس / دانشکده / گروه");

  const { active, setActive } = useContext(UserContext);

  const handleSection = (index) => {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  };

  const handleWrite = (item) => {
    setSelected(item);
    setActive(null);
  };

  return (
    <Container>
      <CardTop>
        <img src={item.url} alt="" />
      </CardTop>
      <CardMiddle>{item.title}</CardMiddle>
      {index === 1 ? (
        <CardFooter>
          <CardInputContainer>
            <Input type="text" placeholder="جستجوی نام رشته" />
            <SearchIcon />
          </CardInputContainer>
          <CardSelectContainer>
            <SelectBox>{selected}</SelectBox>
            <SelectIcon
              onClick={() => handleSection(index)}
              come={active}
              index={index}
            >
              <ArrowDropDownIcon />
              <ArrowDropUpIcon />
            </SelectIcon>
            <SectionHover come={active} index={index} show={check}>
              <SearchBoxContainer>
                <CardInputContainer>
                  <Input type="text" />
                  <SearchIcon />
                </CardInputContainer>
              </SearchBoxContainer>
              <SectionUlList>
                {listArrow.map((item, index) => (
                  <ListItem key={index} onClick={() => handleWrite(item)}>
                    {item}
                  </ListItem>
                ))}
              </SectionUlList>
            </SectionHover>
          </CardSelectContainer>
        </CardFooter>
      ) : null}

      {index === 2 ? (
        <CardFooter>
          <CardInputContainer>
            <Input type="text" placeholder="جستجوی نام پایان نامه" />
            <SearchIcon />
          </CardInputContainer>
          <CardInputContainer>
            <Input type="text" placeholder="جستجوی نام فرد" />
            <SearchIcon />
          </CardInputContainer>
          <CardSelectContainer>
            <SelectBox>{selected}</SelectBox>
            <SelectIcon
              onClick={() => handleSection(index)}
              come={active}
              index={index}
            >
              <ArrowDropDownIcon />
              <ArrowDropUpIcon />
            </SelectIcon>
            <SectionHover come={active} index={index} show={check}>
              <SearchBoxContainer>
                <CardInputContainer>
                  <Input type="text" />
                  <SearchIcon />
                </CardInputContainer>
              </SearchBoxContainer>
              <SectionUlList>
                {listArrow.map((item, index) => (
                  <ListItem key={index} onClick={() => handleWrite(item)}>
                    {item}
                  </ListItem>
                ))}
              </SectionUlList>
            </SectionHover>
          </CardSelectContainer>
        </CardFooter>
      ) : null}
    </Container>
  );
}

export default Card;

const Container = styled.div`
  width: 23rem;
  border: 1px solid black;
  padding: 2rem 1.7rem 3rem 0rem;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const CardTop = styled.div``;

const CardMiddle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

const CardFooter = styled.div``;

const CardInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 1.8rem;
  width: 20rem;
  margin-top: 1rem;
  :nth-child(2) {
    color: gray;
    font-size: 1.3rem;
  }
  @media (max-width: 992px) {
    width: 95%;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  height: 100%;
  border-left: 1px solid black;
  &::placeholder {
    text-indent: 1rem;
  }
`;

const CardSelectContainer = styled.div`
  border: 1px solid black;
  height: 1.8rem;
  width: 20rem;
  margin-top: 1rem;
  display: flex;
  position: relative;
  @media (max-width: 992px) {
    width: 95%;
  }
`;

const SelectBox = styled.div`
  flex: 1;
  border-left: 1px solid black;
  color: gray;
  text-indent: 1rem;
  background-color: #fff;
  font-size: 0.9rem;
`;

const SelectIcon = styled.div`
  background-color: #fff;
  > :first-child {
    color: gray;

    display: ${(props) => (props.come === props.index ? "none" : "block")};
  }
  > :nth-child(2) {
    color: gray;

    display: ${(props) => (props.come === props.index ? "block" : "none")};
  }
`;

const SectionHover = styled.div`
  border: 1px solid blue;
  position: absolute;
  top: ${(props) => (props.show ? "1.7rem" : "-17.7rem")};
  right: 0;
  width: 20rem;
  z-index: 10;
  ${Input} {
    border: none;
  }
  ${CardInputContainer} {
    border: 1px solid gray;
    margin-top: 0;
    height: auto;
    width: auto;
    padding: 0.4rem;
  }
  display: ${(props) => (props.come === props.index ? "block" : "none")};
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const SearchBoxContainer = styled.div`
  padding: 0.2rem;
`;

const SectionUlList = styled.ul`
  overflow-y: scroll;
  height: 15rem;
`;

const ListItem = styled.li`
  font-size: 0.9rem;
  background-color: #fff;
  color: #333;
  padding: 0.6rem 0.2rem 0.6rem 0.2rem;
  &:hover {
    background-color: #337ab7;
    color: white;
    cursor: pointer;
  }
`;
