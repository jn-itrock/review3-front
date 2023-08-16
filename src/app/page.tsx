"use client";
<<<<<<< HEAD

=======
>>>>>>> a2d25e9 (layout home)
import { ThemeProvider } from "styled-components"
import { theme } from "@/utils/theme"
import { HomeHeader } from "@/components/homeHeader"
import { InfoContainer } from "@/components/InfoContainer";
import { EventRanked } from "@/components/eventsRanked";
import { EventsRankedTitle } from "@/components/eventsRankedTitle";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <HomeHeader />
      <InfoContainer />
      <EventsRankedTitle />
      <EventRanked 
        position={1}
        logo="/images/ethLogo.svg"
        points={1.4}
        reviews={550}
        title="Eth Latam"
        location="Bue"
        date="04 Ago"
        likes={5000}
      />
      <EventRanked 
        position={2}
        logo="/images/ethLogo.svg"
        points={1.4}
        reviews={550}
        title="Eth Latam"
        location="Bue"
        date="04 Ago"
        likes={5000}
      />
      <EventRanked 
        position={3}
        logo="/images/ethLogo.svg"
        points={1.4}
        reviews={550}
        title="Eth Latam"
        location="Bue"
        date="04 Ago"
        likes={5000}
      />
      <EventRanked 
        position={4}
        logo="/images/ethLogo.svg"
        points={1.4}
        reviews={550}
        title="Eth Latam"
        location="Bue"
        date="04 Ago"
        likes={5000}
      />
      <EventRanked 
        position={5}
        logo="/images/ethLogo.svg"
        points={1.4}
        reviews={550}
        title="Eth Latam"
        location="Bue"
        date="04 Ago"
        likes={5000}
      />
    </ThemeProvider>
  )
}
