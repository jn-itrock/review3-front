import { HeaderContainer, ButtonDescription, HeaderButton } from "./styles";
import { useActiveWallet } from '@lens-protocol/react-web';


interface Props {
    onLoginClick: () => Promise<void>
}

export const HomeHeader = ({ onLoginClick }: Props) => {

    const { data: wallet, loading } = useActiveWallet();

    return (
        <HeaderContainer>
            <ButtonDescription>Sart to recieve reviewes</ButtonDescription>
            <HeaderButton
                onClick={() => onLoginClick()}
            >
                {wallet ? "Add your event" : "Login"}
            </HeaderButton>
        </HeaderContainer>
    );
};