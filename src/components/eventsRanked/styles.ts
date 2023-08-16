import { styled } from "styled-components";


export const ContainerWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    cursor: pointer;
`;

export const ContainerTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ContainerTextWrapper = styled.div`
    display: flex;
    flex-direction: row'
`;

export const TitleTextBlack = styled.span< {isBlack: boolean }>`
    font-size: ${({theme}) => theme.fonts.size.lg};
    font-weight: ${({theme}) => theme.fonts.weight.xxl};
    color: ${({theme, isBlack}) => isBlack ? theme.colors.black : theme.colors.green}
`;

export const Wrapper = styled.div`
    display: flex;
    width: 50%;
    padding: 24px 0px;
    border-bottom: 1px solid #D3D3D3;
`;


export const RateWrapper = styled.div`
    display: flex;
    gap: 16px;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const RateNumber = styled.span`
    font-size: ${({theme}) => theme.fonts.size.smlg};
    font-weight: ${({theme}) => theme.fonts.weight.lg};
    color: ${({theme}) => theme.colors.black};
`;

export const Stars = styled.image`
    height: 36px;
`;

export const Reviews = styled.span`
    font-size: ${({ theme }) => theme.fonts.size.sm};
    font-weight: ${({theme}) => theme.fonts.weight.xs};
    color: ${({theme}) => theme.colors.gray}
`;

export const EventTitle = styled.span`
    font-size: ${({theme}) => theme.fonts.size.md};
    font-weight: ${({theme}) => theme.fonts.weight.lg};
    color: ${({theme}) => theme.colors.darkBlack};
    margin-top: 3px;
`;

export const EventInfo = styled.span`
    font-size: ${({theme}) => theme.fonts.size.sm};
    font-weight: ${({theme}) => theme.fonts.weight.xs};
    color: ${({theme}) => theme.colors.black};
    margin-top: 5px;
`;

export const LikeWrapper = styled.div`
    display: flex;
    width: 63px;
    gap: 4px;
    padding: 4px 8px;
    background-color: ${({theme}) => theme.colors.grayLight};
    border-radius: 30px;
    margin-top: 24px;
`;

export const LikeNumber = styled.span`
    font-size: ${({theme}) => theme.fonts.size.xs};
    font-weight: ${({theme}) => theme.fonts.weight.lg};
    color: ${({theme}) => theme.colors.black};
`;
