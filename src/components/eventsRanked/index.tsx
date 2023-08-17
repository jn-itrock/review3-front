import { useRouter } from 'next/navigation'
import { IEvent } from "@/interfaces/user/index";
import { ImageContainer, Wrapper, ContainerWrapper, RateWrapper, RateNumber, Reviews, InfoContainer, EventTitle, EventInfo, LikeWrapper, LikeNumber, ContainerTitleWrapper, ContainerTextWrapper, TitleTextBlack } from "./styles";
import Image from '../../../node_modules/next/image';
import { ProfileId, PublicationId, usePublication, usePublications } from '@lens-protocol/react-web';
import { HomeEvent } from '@/interfaces/events';
import { useEffect } from 'react';


interface Props {
    event: HomeEvent,
    index: number
}

export const EventRanked = ({ event, index }: Props) => {

    const number = Math.random() * 250 + 1;
    const likes = Math.floor(number);

    const router = useRouter();



    const handleClick = (id: string) => {
        router.push(`/reviews/${id}`)
    }

    const ratio = () => {
        if(event.totalReviews > 0){
           return event.totalStarts / event.totalReviews
        }else{
            return 0
        }

    }

    return (
        <>
            {
                <ContainerWrapper onClick={(e) => handleClick(event._id)}>
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
                                src={"/images/ethLogo.svg"}
                                alt="logo"
                                width={178} height={152}
                            />
                        </ImageContainer>
                        <InfoContainer>
                            <RateWrapper>
                                <RateNumber>{ratio()}</RateNumber>
                                <img
                                    src="/images/rate.svg"
                                    height={24}
                                />
                                <Reviews>{event.totalReviews} review</Reviews>
                            </RateWrapper>
                            <EventTitle>{event.title}</EventTitle>
                            <LikeWrapper>
                                <img
                                    src="/images/like.svg"
                                />
                                <LikeNumber>
                                    {likes}
                                </LikeNumber>
                            </LikeWrapper>
                        </InfoContainer>
                    </Wrapper>
                </ContainerWrapper>
            }
        </>
    );
};
