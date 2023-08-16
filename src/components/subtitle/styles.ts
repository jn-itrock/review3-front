import { styled } from "styled-components";

export const SubtitleText = styled.span`
    color: ${({theme}) => theme.colors.gray};
    font-size: ${({theme}) => theme.fonts.size.sm};
    font-weight: ${({theme}) => theme.fonts.weight.sm};
    width: 50%;
    line-height: 144%;
`;