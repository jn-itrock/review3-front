import { styled } from "styled-components";

export const HeaderContainer = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    margin-top: 40px;
    gap: 29px;

    @media (min-width: 320px) {
        justify-content: space-between;
    }

    @media (min-width: 768px) {
        justify-content: flex-end;
    }

    @media (min-width: 1024px) {
        justify-content: flex-end;
    }
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
    border: none;
    cursor: pointer;

    @media (min-width: 320px) {
        margin-right: 16px;
    }

    @media (min-width: 768px) {
        margin-right: 105px;
    }

    @media (min-width: 1024px) {
        margin-right: 205px;
    }
`

