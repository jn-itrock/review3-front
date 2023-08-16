import { HeaderContainer, ButtonDescription, HeaderButton } from "./styles";
import { useActiveWallet } from '@lens-protocol/react-web';
import { Dispatch, SetStateAction } from 'react';

interface Props {
    onLoginClick: () => Promise<void>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const HomeHeader = ({ onLoginClick, setIsOpen }: Props) => {

    const { data: wallet, loading } = useActiveWallet();

    return (
        <HeaderContainer>
            <ButtonDescription
                onClick={() => setIsOpen(true)}
            >
                Sart to recieve reviewes
            </ButtonDescription>
            
            <HeaderButton
                onClick={() => onLoginClick()}
            >
                {wallet ? "Add your event" : "Login"}
            </HeaderButton>
        </HeaderContainer>
    );
};