import { ContainerTextWrapper, ContainerTitleWrapper, TitleTextBlack, TitleTextGreen } from "./style"



export const EventsRankedTitle = () => {
    return(
        <ContainerTitleWrapper>
                <img 
                    src="/images/topFive.png"
                />
                <ContainerTextWrapper>
                    <TitleTextBlack>events</TitleTextBlack>
                    <TitleTextGreen>ranked</TitleTextGreen>
                </ContainerTextWrapper>
            </ContainerTitleWrapper>
    )
}