import { useRouter } from 'next/navigation'
import { IEvent } from "@/interfaces/user/index";
import { ImageContainer, Wrapper, ContainerWrapper, RateWrapper, RateNumber, Reviews, InfoContainer, EventTitle, EventInfo, LikeWrapper, LikeNumber, ContainerTitleWrapper, ContainerTextWrapper, TitleTextBlack } from "./styles";
import Image from '../../../node_modules/next/image';


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
        <ImageContainer>
            <Image 
                src={`/images/position${index + 1}.png`}
                alt="logo"
                width={106} height={152}
            />
        </ImageContainer>
        <ImageContainer>
            <Image 
                src={event.logo}
                alt="logo"
                width={178} height={152}
            />
        </ImageContainer>
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
