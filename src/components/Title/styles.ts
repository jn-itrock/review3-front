import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    padding: 0px 206px;
`;

export const Title = styled.span`
    color: ${({theme}) => theme.colors.black};
    font-size: ${({theme}) => theme.fonts.size.xxl};
    font-weight: ${({theme}) => theme.fonts.weight.xxl};
`;

export const ReviewTitleWrapper = styled.div`
    position: relative;
`

export const ReviewTitleImage = styled.img`
    position: absolute;
    z-index: 10000;
`;

export const Background = styled.div`
    position: absolute;
    width: 462px;
    height: 40px;
    flex-shrink: 0;
    background-color: ${({theme}) => theme.colors.green};
`