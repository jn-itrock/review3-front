import { styled } from "styled-components";

export const HeaderContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 40px;
    gap: 29px;
`;

export const ButtonDescription = styled.span`
    color: ${({theme}) => theme.colors.black};
    font-weight: ${({theme}) => theme.fonts.weight.xs};
    font-size: ${({theme}) => theme.fonts.size.sm};
`;

export const HeaderButton = styled.button`
    background-color: ${({theme}) => theme.colors.green};
    color: ${({ theme }) => theme.colors.black};
    padding: 14px 16px;
    border-radius: 16px;
    margin-right: 205px;
    border: none;
`

