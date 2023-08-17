import { styled } from "styled-components";

export const ContainerTitleWrapper = styled.div`
  width: 50%;
  margin: 56px auto 49px auto;
  /* margin-top: 56px; */
  /* margin-bottom: 49px; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ContainerTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const TitleTextBlack = styled.span`
    font-weight: ${({ theme }) => theme.fonts.weight.xxl};
    color: ${({ theme }) => theme.colors.black}
    font-size: ${({ theme }) => theme.fonts.size.l};

    @media (min-width: 320px) {
        font-size: ${({ theme }) => theme.fonts.size.l};
    }

    @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.fonts.size.lg};
    }

    @media (min-width: 1024px) {
        font-size: ${({ theme }) => theme.fonts.size.lg};
    }
`;

export const TitleTextGreen = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weight.xxl};
  font-size: ${({ theme }) => theme.fonts.size.l};

  @media (min-width: 320px) {
    font-size: ${({ theme }) => theme.fonts.size.l};
    color: ${({ theme }) => theme.colors.green};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.lg};
    color: ${({ theme }) => theme.colors.green};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fonts.size.lg};
    color: ${({ theme }) => theme.colors.green};
  }
`;
