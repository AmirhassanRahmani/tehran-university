import { styled } from "styled-components";
import "./App.css";
import Header from "./Components/Header/Header";
import SlickSlider from "./Components/Slider/SlickSlider";
import WebsiteNews from "./Components/WebsiteNews/WebsiteNews";
import Video from "./Components/Video/Video";
import ResearchUniversity from "./Components/Research/ResearchUniversity";
import Schools from "./Components/Schools/Schools";
import BackImage from "./Components/BackImage/BackImage";
import International from "./Components/International/International";
import { createContext, useState } from "react";
import Nature from "./Components/Nature/Nature";
import Search from "./Components/Search/Search";
import Journals from "./Components/Journals/Journals";
import Shooting from "./Components/Shooting/Shooting";
import Event from "./Components/Event/Event";
import TehranImage from "./Components/TehranImage/TehranImage";
import GreenManage from "./Components/GreenManage/GreenManage";
import Famous from "./Components/Famous/Famous";
import Filter from "./Components/Filter/Filter";
import Internte from "./Components/Internet/Internte";
import Footer from "./Components/Footer/Footer";
import End from "./Components/End/End";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const UserContext = createContext();

export const WebContext = createContext();

function App() {
  const [active, setActive] = useState(null);

  return (
    <Container>
      <AncerTag name="top"></AncerTag>
      <Header />
      <SlickSlider />
      <WebsiteNews />
      <Video />
      <ResearchUniversity />
      <Schools />
      <BackImage />
      <UserContext.Provider value={{ active, setActive }}>
        <International />
      </UserContext.Provider>
      <Nature />
      <Search />
      <Journals />
      <Shooting />
      <Event />
      <TehranImage />
      <GreenManage />
      <Famous />
      <Filter />
      <Internte />
      <Footer />
      <End />
      <Ancer href="#top">
        <KeyboardArrowUpIcon />
      </Ancer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
`;

const AncerTag = styled.a``;

const Ancer = styled.a`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    color: white;
    font-size: 2.2rem !important;
  }
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 1);
  }
`;
