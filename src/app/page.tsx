"use client";
import { ThemeProvider } from "styled-components"
import { theme } from "@/utils/theme"
import { HomeHeader } from "@/components/homeHeader"
import { InfoContainer } from "@/components/InfoContainer";
import { EventRanked } from "@/components/eventsRanked";
import { EventsRankedTitle } from "@/components/eventsRankedTitle";
import { events } from "../constants/index";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <HomeHeader />
      <InfoContainer />
      <EventsRankedTitle />

      {events.map((ele, index)=>(
        <EventRanked event={ele} index={index}/>
      ))}
      
    </ThemeProvider>
  )
}
