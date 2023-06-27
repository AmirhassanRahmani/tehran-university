import { styled } from "styled-components";

export const Container = styled.div`
  :first-child {
    .slick-slide > div > div {
      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .slick-prev::before {
      display: none;
    }

    &:hover {
      .slick-prev {
        display: block !important;
      }
    }

    .slick-arrow {
      z-index: 10;
    }

    .slick-prev,
    .slick-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 24px;
      color: white;
      cursor: pointer;
      display: none;
    }

    .slick-prev {
      left: 20px;
    }

    .slick-next {
      right: 20px;
    }
  }
  margin-top: 4rem;

  @media (max-width: 1024px) {
    margin-top: 12.8rem;
  }

  @media (max-width: 992px) {
    /* margin-top: 9.4rem; */
    margin-top: 6.5rem;
  }
`;
