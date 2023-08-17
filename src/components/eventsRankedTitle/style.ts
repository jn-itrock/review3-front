import { styled } from "styled-components";

export const ContainerTitleWrapper = styled.div`
    width: 80%;
    margin-top: 56px;
    margin-bottom: 49px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;

export const TitleTextBlack = styled.span`
    font-weight: ${({theme}) => theme.fonts.weight.xxl};
    color: ${({theme}) => theme.colors.black}
    font-size: ${({theme}) => theme.fonts.size.l};

    @media (min-width: 320px) {
        font-size: ${({theme}) => theme.fonts.size.l};
    }

    @media (min-width: 768px) {
        font-size: ${({theme}) => theme.fonts.size.lg};
    }

    @media (min-width: 1024px) {
        font-size: ${({theme}) => theme.fonts.size.lg};
    }
`;

export const TitleTextGreen = styled.span`
    font-weight: ${({theme}) => theme.fonts.weight.xxl};
    font-size: ${({theme}) => theme.fonts.size.l};

    @media (min-width: 320px) {
        font-size: ${({theme}) => theme.fonts.size.l};
        color: ${({theme}) => theme.colors.green}
    }

    @media (min-width: 768px) {
        font-size: ${({theme}) => theme.fonts.size.lg};
        color: ${({theme}) => theme.colors.green}
    }

    @media (min-width: 1024px) {
        font-size: ${({theme}) => theme.fonts.size.lg};
        color: ${({theme}) => theme.colors.green}
    }
`;