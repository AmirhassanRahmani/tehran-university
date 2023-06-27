import { styled } from "styled-components";

export const Container = styled.div`
  background-image: url("https://ut.ac.ir/assets/75b68afe/images/parallaxes/bg-footer.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  line-height: 2;
  background-color: #3d3d3d;
  width: 100vw;
  min-height: 100vh;
  padding: 4rem 6rem 0rem 1rem;
  @media (max-width: 768px) {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
`;

export const FooterContainer = styled.div`
  width: 95%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterTop = styled.div`
  padding: 0 2rem 1rem 8rem;
  border-bottom: 2px solid #3d3d3d;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeadOne = styled.h1`
  color: #2f9aff;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-indent: -1.5rem;
  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ListRight = styled.ul``;

export const ListMiddle = styled.ul``;

export const ListLeft = styled.ul``;

export const BottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  @media (max-width: 992px) {
    flex-direction: column;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    margin: 0;
  }
`;

export const PostSection = styled.section`
  flex-basis: 23%;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoInfo = styled.div`
  display: grid;
  place-items: center;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  height: 9.5rem;
  /* padding: 1rem; */
  margin: 0.9rem;
  .icon {
    color: #2f9aff;
  }
  .info {
    color: white;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .post {
    color: white;
  }
  .post_box {
    color: white;
  }

  @media (max-width: 992px) {
    border: none;
  }
`;
