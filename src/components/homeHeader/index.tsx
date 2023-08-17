import { HeaderContainer, ButtonDescription, HeaderButton } from "./styles";
import { ProfileOwnedByMe, useActiveWallet } from '@lens-protocol/react-web';
import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'
import { useActiveProfileSwitch, useActiveProfile, useProfilesOwnedByMe } from '@lens-protocol/react-web';

import {
    SignInWithLens, Theme, Size
  } from '@lens-protocol/widgets-react'
import { Dispatch, SetStateAction } from "react";
  

interface Props {
    profile: ProfileOwnedByMe | null | undefined
    login: () => Promise<void>
    isConnected: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}



export const HomeHeader = ({ profile, login, isConnected, setIsOpen }: Props) => {
    const { data: activeProfile } = useActiveProfile();
  
    const handleOpenModal = () => {
        setIsOpen(true)
    }

    return (
        <HeaderContainer>

            <ButtonDescription>Start to receive reviewes</ButtonDescription>
            <ButtonDescription>{ isConnected ? profile?.handle : ""}</ButtonDescription>
            <HeaderButton
                disabled={false} onClick={() => handleOpenModal()}
            > Add your event 
            </HeaderButton>
            <HeaderButton
                onClick={() => login()}
            > { isConnected ? activeProfile?.handle : "Login"} 
            </HeaderButton>
        </HeaderContainer>
    );
};

 
  
  
