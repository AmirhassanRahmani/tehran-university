import { keyframes, styled } from "styled-components";

export const scroll = keyframes`
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(420%);
    }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
`;

export const HeaderTop = styled.div`
  visibility: ${(props) => (props.hideHeader ? "hidden" : "visible")};
`;

export const ImageLogo = styled.img`
  transition: width 0.4s ease;
  width: ${(props) => (props.changeLogoSize ? "4rem" : "6rem")};
`;

export const HeaderBottomContainer = styled.div`
  background: linear-gradient(
    to bottom,
    #000 0%,
    rgba(0, 0, 0, 0.3) 80%,
    transparent 100%
  );
  background: ${(props) => (props.changeTheme ? "white" : null)};
  padding: ${(props) => (props.changeTheme ? "1rem" : "0.3rem")};
  height: ${(props) => (props.changeTheme ? "auto" : "8rem")};
  position: ${(props) => (props.changeTheme ? "fixed" : "relative")};
  top: 0;
  left: 0;
  width: 100%;

  box-shadow: ${(props) => (props.changeTheme ? " 4px 0px 15px #666" : null)};
  @media (max-width: 992px) {
    height: auto;
    background: white;
    ${ImageLogo} {
      width: 4rem;
    }
  }
`;

export const HeaderLogoImage = styled.div`
  display: flex;
`;

export const ListNav = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  @media (max-width: 1255px) {
    font-size: 0.9rem;
  }
  @media (max-width: 1096px) {
    font-size: 0.8rem;
  }

  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    /* bottom: -0.5rem; */
    bottom: ${(props) => (props.ColorBottom ? "-1.7rem" : "-0.5rem")};
    right: 0;
    /* border-bottom: 3px solid white; */
    border-bottom: ${(props) =>
      props.ColorBottom ? "3px solid #2f9aff" : "3px solid white"};
    transition: width 0.4s ease;
    width: 0%;
  }
  &:hover {
    cursor: pointer;
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 992px) {
    &::after {
      border-bottom: 0px;
    }
  }
`;

export const DarkList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1314px) {
    gap: 0.5rem;
  }
  @media (max-width: 1024px) {
    display: ${(props) => (props.showMenu ? "flex" : "none")};
    flex-basis: 100%;
    padding-right: 1rem;
    gap: 1rem;
    position: relative;
    top: -0.8rem;
    ${ListNav} {
      font-size: 1rem;
    }
  }
  @media (max-width: 992px) {
    display: ${(props) => (props.showMenu ? "grid" : "none")};
    gap: 0;
    height: 50vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

export const SubTitle = styled.section`
  position: absolute;
  top: 2rem;
  right: 0;
`;

export const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 0 auto;
  z-index: 1000;

  .menu {
    color: white;
    display: none;
    @media (max-width: 992px) {
      color: #1e92ff;
    }
  }
  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0 0.2rem;
    .menu {
      display: block;
    }
  }
`;

export const HeaderlWhiteContainer = styled.div`
  background-color: white;
  padding-top: 0.3rem;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const HeaderWhite = styled.div`
  background-color: white;
  position: relative;
  max-width: 80%;
  margin: 0 auto;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0rem;
    left: 0rem;
    background-color: #fff;
    z-index: 10;
    background-image: url("https://ut.ac.ir/assets/75b68afe/images/right.png");
    background-size: cover;
    width: 1.74rem;
    height: 2rem;
    transform: scaleX(-1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0rem;
    right: 0rem;
    background-color: #fff;
    z-index: 10;
    background-image: url("https://ut.ac.ir/assets/75b68afe/images/right.png");
    background-size: cover;
    width: 1.74rem;
    height: 2rem;
  }

  > ul {
    display: flex;
    align-items: center;
    animation: ${scroll} 55s infinite linear;
    &:hover {
      cursor: pointer;
      animation-play-state: paused;
    }
    > li {
      padding: 0.5rem 1rem;
      white-space: nowrap;
      position: relative;
      color: #737373;
      display: flex;
      align-items: center;
      :first-child {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: #999;
        margin-left: 0.5rem;
      }
    }
  }
`;

export const HeaderRed = styled.div`
  background: #940000;
  direction: ltr;
`;

export const InputOver = styled.input`
  border: none;
  outline: none;
  margin-right: 0.3rem;
  direction: rtl;
  display: flex;
  /* width: 0; */
  transition: width 0.5s ease-in-out;
  z-index: 2;
  width: ${(props) => (props.show ? "16rem" : "0rem")};
  padding: 0.3rem 0;
`;

export const SpanHide = styled.div`
  /* transition: display 0.5s ease; */
  /* display: ${(props) => (props.hide ? "none" : "flex")}; */
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  /* top: 0; */
  left: 3.2rem;
`;

export const SpanInput = styled.span`
  display: flex;
  align-items: center;
`;

export const SpanKhTop = styled.div`
  display: none;
  align-items: center;

  > div {
    font-size: 0.9rem;
  }

  @media (max-width: 992px) {
    display: flex;
  }
`;

export const SpanKhBottom = styled.div`
  background-color: white;
  position: absolute;
  top: 1.8rem;
  right: 0;
  z-index: 8;
  width: 100%;
  text-align: center;
  display: ${(props) => (props.visit ? "block" : "none")};
`;

export const Lan = styled.div`
  color: #2f9aff;
  border-bottom: 1px solid #2f9aff;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 0.9rem;
`;

export const SpanKh = styled.span`
  display: flex;
  position: relative;
`;

export const SpanContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 1rem;
  max-width: 18%;
  margin-left: 9.6rem;
  color: white;
  padding: 0.3rem;
  .imageContainer {
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid white;
    border-radius: 100%;
    padding: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  .iconContainer {
    width: 1.8rem;
    height: 1.8rem;
    background-color: #fff;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > :first-child {
      color: #940000;
      font-size: medium;
      font-weight: bold;
    }
  }
`;

export const ListNavBottom = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const SpanDropIcon = styled.span`
  > * {
    transition: all 0.4s ease;
    color: ${(props) => (props.changeColorIcon ? "black" : "white")};
    font-size: 1.1rem !important;
    position: relative;
    top: 0.2rem;
    @media (max-width: 992px) {
      color: #132b67;
    }
  }
`;

export const Second = styled.div`
  display: grid;
  > section {
    text-align: right;
  }
`;

export const DropSection = styled.section``;

export const SetArrow = styled.div`
  display: flex;
  align-items: center;
`;

export const DropRight = styled.div`
  background-color: #fff;
  position: absolute;
  top: 0;
  right: 10.4rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  padding: 1rem;
  display: none;
`;

export const SpanNav = styled.span`
  transition: all 0.4s ease;
  color: ${(props) => (props.changeColor ? "black" : "white")};
  font-weight: ${(props) => (props.changeColor ? "500" : "bold")};
  position: relative;
  @media (max-width: 992px) {
    color: #132b67;
  }
`;

export const SectionNav = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
  &:hover > * > :first-child {
    color: ${(props) => (props.changing ? "#2f9aff" : null)};
  }
`;

export const SpanTitle = styled.span`
  position: relative;
  font-size: 0.8rem;
  > section {
    display: flex;
  }
  &:hover {
    ${DropRight} {
      display: block;
    }
    right: -0.4rem;
    border-bottom: 1px solid #2f9aff;
  }

  @media (max-width: 992px) {
    color: #333;
    font-weight: normal;
  }
`;

export const SpanIcon = styled.span`
  > * {
    font-size: 0.9rem !important;
    position: relative;
    top: 0.3rem;
  }
`;

export const GridSection = styled.div``;

export const GridSectionTwo = styled.div``;

export const GridContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  height: 30rem;
  width: 73rem;
  @media (max-width: 992px) {
    flex-wrap: nowrap;
    height: auto;
  }
`;

export const GridContentTwo = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex-wrap: wrap;
  height: 17.5rem;
  min-width: 73rem;
  @media (max-width: 992px) {
    flex-wrap: nowrap;
    height: auto;
  }
`;

export const GridContentThree = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  height: 18rem;
  min-width: 73rem;
  > :nth-child(4) {
    padding-bottom: 4.5rem;
    @media (max-width: 992px) {
      padding-bottom: 0;
    }
  }
  @media (max-width: 992px) {
    flex-wrap: nowrap;
    height: auto;
  }
`;

export const More = styled.div`
  > * {
    color: #940000;
  }
`;

export const HeadTitle = styled.div`
  color: #132b67 !important;
  @media (max-width: 992px) {
    font-size: 0.9rem;
    font-weight: normal;
  }
`;

export const SubList = styled.span`
  position: absolute;
  top: ${(props) => (props.changeLoc ? "3rem" : "3.4rem")};
  right: ${(props) => (props.index === 3 ? "-35rem" : "0rem")};
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  min-width: 9rem;
  padding: 0.5rem;
  text-align: center;
  white-space: nowrap;
  display: flex;
  align-items: center;
  color: #2f9aff;
  z-index: 2;

  @media (max-width: 992px) {
    position: static;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
  }
  ${GridSection} {
    width: 73rem;
  }
`;
export const SubListTwo = styled.span`
  position: absolute;
  top: ${(props) => (props.changeLoc ? "3rem" : "3.4rem")};
  right: ${(props) => (props.index === 5 ? "-57.5rem" : "-47.5rem")};
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  min-width: 9rem;
  padding: 0.5rem;
  text-align: center;
  white-space: nowrap;
  color: #2f9aff;
  z-index: 2;
  @media (max-width: 992px) {
    position: static;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
  }
  ${GridSectionTwo} {
    width: 73rem;
  }
`;

export const FixedList = styled.div`
  z-index: 10000;
`;

export const UlFixed = styled.ul`
  position: fixed;
  z-index: 10000;
  top: 13.2rem;
  right: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const GridSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
`;

export const Right = styled.div``;

export const Middle = styled.div``;

export const Left = styled.div``;

export const RightFirst = styled.div`
  flex-grow: 1;
  > div {
    text-align: right;
  }
`;
