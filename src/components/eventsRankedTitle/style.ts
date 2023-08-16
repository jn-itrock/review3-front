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
    font-size: ${({theme}) => theme.fonts.size.lg};
    font-weight: ${({theme}) => theme.fonts.weight.xxl};
    color: ${({theme}) => theme.colors.black}
`;

export const TitleTextGreen = styled.span`
    font-size: ${({theme}) => theme.fonts.size.lg};
    font-weight: ${({theme}) => theme.fonts.weight.xxl};
    color: ${({theme}) => theme.colors.green}
`;