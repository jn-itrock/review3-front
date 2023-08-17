"use client";
import { useState } from 'react';
import { useWalletLogin, useCreateProfile, useActiveProfile } from '@lens-protocol/react-web';
import { useAccount } from 'wagmi';
import { theme } from "@/utils/theme"
import { HomeHeader } from "@/components/homeHeader"
import { InfoContainer } from "@/components/InfoContainer";
import { EventRanked } from "@/components/eventsRanked";
import { EventsRankedTitle } from "@/components/eventsRankedTitle";
import { events } from "../../constants/index";
import { useWeb3Modal } from '@web3modal/react'
import { useEffect } from 'react';
import { CreateEvent } from '@/components/createEvent';
import { ThemeProvider } from "styled-components"

interface Props {
  data: Response | null;
}

export default function HomeClient({ data }: Props) {
  const { open } = useWeb3Modal()
  const {address, isConnected } = useAccount()
  const { data: activeProfile } = useActiveProfile();
  const { execute: login } = useWalletLogin();
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const { execute: create } = useCreateProfile();



  useEffect(() => {

    const fetchData = async () => {

      try {
        await login({
          address: address!
        })

        if(!activeProfile){
          await create({handle: "itrockdev1"})
        }
      
      }catch(e){
        console.error(e);
      }
        
    }
    fetchData()

  }, [address])
 

  return (
    <ThemeProvider theme={theme}>
      <HomeHeader profile={{} as any} login={open} isConnected={isConnected} setIsOpen={setIsOpen} />
      {isOpen && <CreateEvent setIsOpen={setIsOpen} />}
      <InfoContainer />
      <EventsRankedTitle />

      {events.map((ele, index)=>(
        <EventRanked event={ele} index={index}/>
      ))}
      
    </ThemeProvider>
  )
}
