"use client";
import { useState } from 'react';
import { useWalletLogin, useCreateProfile, useActiveProfile, usePublication, PublicationId } from '@lens-protocol/react-web';
import { useAccount } from 'wagmi';
import { theme } from "@/utils/theme"
import { HomeHeader } from "@/components/homeHeader"
import { InfoContainer } from "@/components/InfoContainer";
import { EventRanked } from "@/components/eventsRanked";
import { EventsRankedTitle } from "@/components/eventsRankedTitle";
import { useWeb3Modal } from '@web3modal/react'
import { useEffect } from 'react';
import { CreateEvent } from '@/components/createEvent';
import { ThemeProvider } from "styled-components"
import { HomeEvent } from '@/interfaces/events';


export default function HomeClient() {
  const { open } = useWeb3Modal()
  const { address, isConnected } = useAccount()
  const { data: activeProfile } = useActiveProfile();
  const { execute: login } = useWalletLogin();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { execute: create } = useCreateProfile();
  const [eventsHome, setEventsHome] = useState<HomeEvent[]>([]);

  useEffect(() => {
    const getData = async () => {

      let url = "https://eth-arg-api.itrock.com.ar/event"
      try {
        const data = await fetch(url, {
          method: "GET"
        });

        const response: HomeEvent[] = await data.json();

        setEventsHome(response);

      } catch (e) {
        console.log("ERROR AL BUSCAR LOS EVENTOS", e)
      }
    }

    getData();

  }, [])

  useEffect(() => {

    const fetchData = async () => {

      try {
        await login({
          address: address!
        })

        if (!activeProfile) {
          await create({ handle: "itrockdev"})
        }

      } catch (e) {
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

      {eventsHome.map((ele, index) => (
        <EventRanked event={ele} index={index} />
      ))}

    </ThemeProvider>
  )
}
