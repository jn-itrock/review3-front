import { ContainerTextWrapper, ContainerTitleWrapper, TitleTextBlack, TitleTextGreen } from "./style"



export const EventsRankedTitle = () => {
    return(
        <ContainerTitleWrapper>
                <img 
                    src="/images/topFive.png"
                />
                <ContainerTextWrapper>
                    <TitleTextBlack style={{
                        fontSize: "72px", fontWeight: "1000", color: "#3A3748"
                    }}>events</TitleTextBlack>
                    <TitleTextGreen>ranked</TitleTextGreen>
                </ContainerTextWrapper>
            </ContainerTitleWrapper>
    )
}