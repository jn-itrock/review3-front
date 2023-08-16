import { useRouter } from 'next/navigation'
import { IEvent } from "@/app/interfaces/user/index";
import { Wrapper, ContainerWrapper, RateWrapper, RateNumber, Reviews, InfoContainer, EventTitle, EventInfo, LikeWrapper, LikeNumber, ContainerTitleWrapper, ContainerTextWrapper, TitleTextBlack } from "./styles";


interface Props {
    event: IEvent,
    index: number
}

export const EventRanked = ({event, index}: Props) => {

    const router = useRouter();


    const handleClick = (id: string) => {
        router.push('/reviews')
    }

    return(
        <ContainerWrapper onClick={(e) => handleClick(event.id)}>
        <Wrapper>
            <img 
                src={`/images/position${index + 1}.svg`}
            />
            <img 
                src={event.logo}
            />
            <InfoContainer>
                <RateWrapper>
                    <RateNumber>{event.points}</RateNumber>
                    <img
                        src="/images/rate.svg"
                        height={24}
                    />
                    <Reviews>{event.reviewsCount} review</Reviews>
                </RateWrapper>
                <EventTitle>{event.name}</EventTitle>
                <EventInfo>{event.country} | {event.date}</EventInfo>
                <LikeWrapper>
                    <img 
                        src="/images/like.svg"
                    />
                    <LikeNumber>
                        {event.likes}
                    </LikeNumber>
                </LikeWrapper>
            </InfoContainer>
        </Wrapper>
        </ContainerWrapper>
    );
};