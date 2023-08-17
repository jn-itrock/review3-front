import Image from "next/image"
import { ImageContainer } from "../eventsRanked/styles"
import { ContainerTextWrapper, ContainerTitleWrapper, TitleTextBlack, TitleTextGreen } from "./style"



export const EventsRankedTitle = () => {
    return(
        <ContainerTitleWrapper>
          <ImageContainer style={{'marginLeft': '-12px', 'alignSelf': "selft-start"}}> 
            <Image
                src={'/images/topFive.png'}
                alt="topFive"
                width={300} height={132}
            />
          </ImageContainer>
          <ContainerTextWrapper>
            <TitleTextBlack>events</TitleTextBlack>
            <TitleTextGreen>ranked</TitleTextGreen>
          </ContainerTextWrapper>
        </ContainerTitleWrapper>
    )
}
