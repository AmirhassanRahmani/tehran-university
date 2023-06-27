import React from "react";
import {
  BottomContent,
  Container,
  FooterBottom,
  FooterContainer,
  FooterTop,
  HeadOne,
  ListLeft,
  ListMiddle,
  ListRight,
  Logo,
  LogoInfo,
  PostSection,
  TopContent,
} from "./Footer-styles";
import listRight from "../../utils/listRight";
import ItemRight from "./ItemRight";
import listMiddle from "../../utils/listMiddle";
import listLeft from "../../utils/listLeft";
import listFooterBottom from "../../utils/listFooterBottom";

function Footer() {
  return (
    <Container>
      <FooterContainer>
        <FooterTop>
          <HeadOne>ساختار و مراکز دانشگاه</HeadOne>
          <TopContent>
            <ListRight>
              {listRight.map((item, index) => (
                <ItemRight item={item} index={index} />
              ))}
            </ListRight>
            <ListMiddle>
              {listMiddle.map((item, index) => (
                <ItemRight item={item} index={index} />
              ))}
            </ListMiddle>
            <ListLeft>
              {listLeft.map((item, index) => (
                <ItemRight item={item} index={index} />
              ))}
            </ListLeft>
          </TopContent>
        </FooterTop>
        <FooterBottom>
          <BottomContent>
            {listFooterBottom.map((item, index) => (
              <PostSection>
                <LogoInfo>
                  <div className="icon">{item.icon}</div>
                  <div className="info">
                    <div>{item.info}</div>
                    <div className="email">{item.email}</div>
                  </div>
                  <div className="post">{item.post}</div>
                  <div className="post_box">{item.postBox}</div>
                </LogoInfo>
              </PostSection>
            ))}
          </BottomContent>
          <Logo>
            <img
              src="	https://ut.ac.ir/assets/75b68afe/images/logos/logo-footer.png"
              alt=""
            />
          </Logo>
        </FooterBottom>
      </FooterContainer>
    </Container>
  );
}

export default Footer;
