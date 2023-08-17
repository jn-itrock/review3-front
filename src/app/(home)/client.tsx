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
// import { polygon } from 'wagmi/chains';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { LensClient, production } from "@lens-protocol/client";

export default function HomeClient() {
    const { open, close } = useWeb3Modal()
  const {address, isConnected, status} = useAccount()

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
        console.log(address)
        const lensClient = new LensClient({
            environment: production,
          });
          
          console.log(address)
          // by ownedBy
          const allOwnedProfiles = await lensClient.profile.fetchAll({
            ownedBy: [address?address:''],
            limit: 1
          });
          console.log(allOwnedProfiles.items[0])
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [address])
 

  return (
    <ThemeProvider theme={theme}>
      <HomeHeader profile={{} as any} login={open} isConnected={isConnected}/>
      <InfoContainer />
      <EventsRankedTitle />

      {events.map((ele, index)=>(
        <EventRanked event={ele} index={index}/>
      ))}
      
    </ThemeProvider>
  )
}
