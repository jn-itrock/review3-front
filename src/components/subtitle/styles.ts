import { styled } from "styled-components";

export const SubtitleText = styled.span`
    color: ${({theme}) => theme.colors.gray};
    font-size: ${({theme}) => theme.fonts.size.sm};
    font-weight: ${({theme}) => theme.fonts.weight.sm};
    line-height: 144%;

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