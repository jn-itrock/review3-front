import { HeaderContainer, ButtonDescription, HeaderButton } from "./styles";
import { ProfileOwnedByMe, useActiveWallet } from '@lens-protocol/react-web';
import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'
import { useActiveProfileSwitch, useActiveProfile, useProfilesOwnedByMe } from '@lens-protocol/react-web';

import {
    SignInWithLens, Theme, Size
  } from '@lens-protocol/widgets-react'
  

interface Props {
    profile: ProfileOwnedByMe | null | undefined
    login: () => Promise<void>
    isConnected: boolean
}



export const HomeHeader = ({ profile, login, isConnected }: Props) => {
    const { data: activeProfile } = useActiveProfile();
  
    return (
        <HeaderContainer>

            <ButtonDescription>Sart to recieve reviewes</ButtonDescription>
            <ButtonDescription>{ isConnected ? profile?.handle : ""}</ButtonDescription>
            <HeaderButton
                disabled={isConnected} onClick={() => alert('abrir modal')}
            > Add your event 
            </HeaderButton>
            <HeaderButton
                onClick={() => login()}
            > { isConnected ? activeProfile?.handle : ""} 
            </HeaderButton>
        </HeaderContainer>
    );
};

 
  
  