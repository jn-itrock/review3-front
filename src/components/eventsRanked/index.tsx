import { Wrapper, ContainerWrapper, RateWrapper, RateNumber, Reviews, InfoContainer, EventTitle, EventInfo, LikeWrapper, LikeNumber, ContainerTitleWrapper, ContainerTextWrapper, TitleTextBlack } from "./styles";


interface Props {
    position: number;
    logo: string;
    points: string | number;
    reviews: number;
    title: string;
    location: string;
    date: string;
    likes: number;
}

export const EventRanked = ({
    position, 
    logo, 
    points, 
    reviews, 
    title, 
    location, 
    date, 
    likes
}: Props) => {

    return(
        <ContainerWrapper>
        <Wrapper>
            <img 
                src={`/images/position${position}.svg`}
            />
            <img 
                src={logo}
            />
            <InfoContainer>
                <RateWrapper>
                    <RateNumber>{points}</RateNumber>
                    <img
                        src="/images/rate.svg"
                        height={24}
                    />
                    <Reviews>{reviews} review</Reviews>
                </RateWrapper>
                <EventTitle>{title}</EventTitle>
                <EventInfo>{location} | {date}</EventInfo>
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
    );
};