import { HeaderContainer, ButtonDescription, HeaderButton } from "./styles";


interface Props {
    onLoginClick: () => Promise<void>
}

export const HomeHeader = ({ onLoginClick }: Props) => {
    return (
        <HeaderContainer>
            <ButtonDescription>Sart to recieve reviewes</ButtonDescription>
            <HeaderButton
                onClick={() => onLoginClick()}
            >
                Add your event
            </HeaderButton>
        </HeaderContainer>
    );
};