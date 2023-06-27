import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  HeaderTop,
  HeaderRed,
  SpanContainer,
  HeaderWhite,
  HeaderBottom,
  HeaderlWhiteContainer,
  HeaderBottomContainer,
  InputOver,
  SpanHide,
  SpanInput,
  ListNav,
  SpanNav,
  SubList,
  SpanIcon,
  SpanTitle,
  ListNavBottom,
  SubListTwo,
  HeaderLogoImage,
  SpanDropIcon,
  ImageLogo,
  DropSection,
  FixedList,
  UlFixed,
  SpanKh,
  SpanKhTop,
  SpanKhBottom,
  Lan,
  DarkList,
  SectionNav,
  Second,
  DropRight,
  SetArrow,
  RightFirst,
  GridContent,
  GridContentTwo,
  GridContentThree,
  More,
  HeadTitle,
} from "./Header-styles";
import SearchIcon from "@mui/icons-material/Search";
import headerListRed from "../../utils/listHeaderRed";
import listHeaderUl from "../../utils/listHeaderUl";
import listHeaderBottom from "../../utils/lifeHeaderBottom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import SpanLan from "./SpanLan";
import headerFixedUl from "../../utils/listHeaderFixed";
import ListStick from "./ListStick";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [state, setState] = useState(false);
  const [id, setId] = useState(null);
  const [scrollBottom, setScrollBottom] = useState(false);
  const [show, setShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  // const distance = useRef(null);
  // const [compute, setCompute] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 1) {
        setScrollBottom(true);
      } else {
        setScrollBottom(false);
      }
    });
  }, [scrollBottom]);

  const handleShowInput = () => {
    setState(true);
  };
  const handleHideInput = () => {
    setState(false);
  };

  const handleSection = (index) => {
    if (id === index) {
      return setId(null);
    }
    setId(index);
   
  };

  const handleDropUl = () => {
    setShow(!show);
  };

  const handleShowUl = () => {
    setMenuShow(!menuShow);
  };

  return (
    <Container>
      <HeaderTop hideHeader={scrollBottom}>
        <HeaderRed>
          <SpanContainer>
            <SpanInput
              onMouseEnter={handleShowInput}
              onMouseLeave={handleHideInput}
            >
              <InputOver type="text" show={state} />
              <span className="iconContainer">
                <SearchIcon />
              </span>
            </SpanInput>

            <SpanHide hide={state}>
              <span className="imageContainer">
                <img
                  src="https://ut.ac.ir/assets/75b68afe/images/contact-header.png"
                  alt=""
                />
              </span>

              {headerListRed.map((item, index) => (
                <SpanLan key={index} item={item} index={index} />
              ))}
              <SpanKh>
                <SpanKhTop onClick={handleDropUl}>
                  <div>خدمات</div>
                  <ArrowDropDownIcon />
                </SpanKhTop>
                <SpanKhBottom visit={show}>
                  {headerListRed.map((item, index) => (
                    <Lan>{item}</Lan>
                  ))}
                </SpanKhBottom>
              </SpanKh>
            </SpanHide>
          </SpanContainer>
        </HeaderRed>
        <HeaderlWhiteContainer>
          <HeaderWhite>
            <ul>
              {listHeaderUl.map((item, index) => (
                <li key={index}>
                  <span></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </HeaderWhite>
        </HeaderlWhiteContainer>
      </HeaderTop>
      <HeaderBottomContainer changeTheme={scrollBottom}>
        <HeaderBottom>
          <HeaderLogoImage>
            <ImageLogo
              src="https://ut.ac.ir/images/www/fa/website/site-logo/2023/1678717000-8555555.png"
              alt=""
              changeLogoSize={scrollBottom}
            />
          </HeaderLogoImage>
          <MenuIcon className="menu" onClick={handleShowUl} />
          <DarkList showMenu={menuShow}>
            {listHeaderBottom.map((item, index) => (
              <ListNav key={index} ColorBottom={scrollBottom}>
                <DropSection>
                  <SectionNav changing={scrollBottom}>
                    <SpanNav
                      onClick={() => handleSection(index)}
                      changeColor={scrollBottom}
                    >
                      <div>{item.title}</div>
                    </SpanNav>
                    <SpanDropIcon changeColorIcon={scrollBottom}>
                      <ArrowDropDownIcon />
                    </SpanDropIcon>
                  </SectionNav>
                  <ListNavBottom show={id === index}>
                    <>
                      {id === index && (
                        <SubList changeLoc={scrollBottom} index={index}>
                          {item.first && (
                            <>
                              {" "}
                              <SpanIcon>
                                <KeyboardArrowLeftIcon fontSize="small" />
                              </SpanIcon>
                              <SpanTitle>{item.first}</SpanTitle>
                            </>
                          )}

                          {item.second && (
                            <Second>
                              {item.second.map((cell, ind) => (
                                <section key={ind}>
                                  <SpanIcon>
                                    <KeyboardArrowLeftIcon fontSize="small" />
                                  </SpanIcon>
                                  <SpanTitle>{cell}</SpanTitle>
                                </section>
                              ))}
                            </Second>
                          )}

                          {item.third && (
                            <Second>
                              {item.third.map((cell, ind) => (
                                <section key={ind}>
                                  <SpanIcon>
                                    <KeyboardArrowLeftIcon fontSize="small" />
                                  </SpanIcon>
                                  <SpanTitle>
                                    {cell.label}
                                    {cell.dropdown && (
                                      <DropRight>
                                        {cell.dropdown.map((content, index) => (
                                          <SetArrow>
                                            <SpanIcon>
                                              <KeyboardArrowLeftIcon fontSize="small" />
                                            </SpanIcon>
                                            <p>{content}</p>
                                          </SetArrow>
                                        ))}
                                      </DropRight>
                                    )}
                                  </SpanTitle>
                                </section>
                              ))}
                            </Second>
                          )}

                          {item.four && (
                            <GridContent>
                              {item.four.map((cell, index) => (
                                <RightFirst key={index} className="hsn">
                                  <HeadTitle> {cell.headTitle}</HeadTitle>
                                  {cell.subTitle && (
                                    <>
                                      {cell.subTitle.map((repo, index) => (
                                        <div>
                                          <div>
                                            <SpanIcon>
                                              <KeyboardArrowLeftIcon fontSize="small" />
                                            </SpanIcon>
                                            <SpanTitle>{repo}</SpanTitle>
                                          </div>
                                        </div>
                                      ))}
                                    </>
                                  )}
                                  {cell.more && (
                                    <More>
                                      <SpanIcon>
                                        <KeyboardArrowLeftIcon fontSize="small" />
                                      </SpanIcon>
                                      <SpanTitle>{cell.more}</SpanTitle>
                                    </More>
                                  )}
                                </RightFirst>
                              ))}
                            </GridContent>
                          )}

                          {item.seven && (
                            <Second>
                              {item.seven.map((cell, ind) => (
                                <section key={ind}>
                                  <SpanIcon>
                                    <KeyboardArrowLeftIcon fontSize="small" />
                                  </SpanIcon>
                                  <SpanTitle>{cell}</SpanTitle>
                                </section>
                              ))}
                            </Second>
                          )}
                        </SubList>
                      )}

                      {index === 4 && item.five && (
                        <SubListTwo>
                          <GridContentTwo>
                            {item.five.map((cell, index) => (
                              <RightFirst key={index}>
                                <HeadTitle> {cell.headTitle}</HeadTitle>
                                {cell.subTitle && (
                                  <>
                                    {cell.subTitle.map((repo, index) => (
                                      <div>
                                        <div>
                                          <SpanIcon>
                                            <KeyboardArrowLeftIcon fontSize="small" />
                                          </SpanIcon>
                                          <SpanTitle>{repo}</SpanTitle>
                                        </div>
                                      </div>
                                    ))}
                                  </>
                                )}
                                {cell.more && (
                                  <More>
                                    <SpanIcon>
                                      <KeyboardArrowLeftIcon fontSize="small" />
                                    </SpanIcon>
                                    <SpanTitle>{cell.more}</SpanTitle>
                                  </More>
                                )}
                              </RightFirst>
                            ))}
                          </GridContentTwo>
                        </SubListTwo>
                      )}

                      {index === 5 && item.six && (
                        <SubListTwo index={index}>
                          <GridContentThree>
                            {item.six.map((cell, index) => (
                              <RightFirst key={index}>
                                <HeadTitle> {cell.headTitle}</HeadTitle>
                                {cell.subTitle && (
                                  <>
                                    {cell.subTitle.map((repo, index) => (
                                      <div>
                                        <div>
                                          <SpanIcon>
                                            <KeyboardArrowLeftIcon fontSize="small" />
                                          </SpanIcon>
                                          <SpanTitle>{repo}</SpanTitle>
                                        </div>
                                      </div>
                                    ))}
                                  </>
                                )}
                                {cell.more && (
                                  <More>
                                    <SpanIcon>
                                      <KeyboardArrowLeftIcon fontSize="small" />
                                    </SpanIcon>
                                    <SpanTitle>{cell.more}</SpanTitle>
                                  </More>
                                )}
                              </RightFirst>
                            ))}
                          </GridContentThree>
                        </SubListTwo>
                      )}
                    </>
                  </ListNavBottom>
                </DropSection>
              </ListNav>
            ))}
          </DarkList>
        </HeaderBottom>
      </HeaderBottomContainer>
      <FixedList>
        <UlFixed>
          {headerFixedUl.map((item, index) => (
            <ListStick item={item} index={index} />
          ))}
        </UlFixed>
      </FixedList>
    </Container>
  );
}

export default Header;
