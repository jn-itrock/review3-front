"use client";
import { useWalletLogin } from '@lens-protocol/react-web';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { ThemeProvider } from "styled-components"
import { theme } from "@/utils/theme"
import { HomeHeader } from "@/components/homeHeader"
import { InfoContainer } from "@/components/InfoContainer";
import { EventRanked } from "@/components/eventsRanked";
import { EventsRankedTitle } from "@/components/eventsRankedTitle";
import { events } from "../../constants/index";
import { useActiveProfile } from '@lens-protocol/react-web';
import { useWeb3Modal } from '@web3modal/react'
import { useEffect } from 'react';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { polygon } from 'wagmi/chains';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

export default function HomeClient() {
    const { open, close } = useWeb3Modal()

  const { data, error, loading } = useActiveProfile();
  const { execute: login, error: loginError, isPending: isLoginPending } = useWalletLogin();
  const {address, isConnected, status} = useAccount()

  const { disconnectAsync } = useDisconnect();


  const chains = [polygon]
  const projectId = 'f542afa6942831c90340b3297550a386'


  const { connectAsync } = useConnect({
    connector: w3mConnectors({ projectId, chains })[0],
  });


  const onLoginClick = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { connector } = await connectAsync();

    if (connector instanceof WalletConnectConnector) {
      const walletClient = await connector.getWalletClient();
      await login({
        address: walletClient.account.address,
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <HomeHeader profile={data} login={onLoginClick} isConnected={isConnected}/>
      <InfoContainer />
      <EventsRankedTitle />

      {events.map((ele, index)=>(
        <EventRanked event={ele} index={index}/>
      ))}
      
    </ThemeProvider>
  )
}
