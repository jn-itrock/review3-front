"use client"
import Image from "next/image";
import { useState, useEffect } from 'react';
import { Review } from "../../components/review/index";
import { events } from "../../constants";
import { IEvent, IReview } from "../../interfaces/user/index";
import { Comment } from "./comment/index";
import styles from "./index.module.scss"
import ReviewTitle from "./reviewTitle/index";
import { useRouter, usePathname } from "next/navigation";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";


interface Props {
    getData: Promise<number>;
}

export const ReviewsClient = ({getData}: Props) => {

    const router = usePathname();
    const [ eventInfo, setEventInfo ] = useState<any>();
    const [isCreateNewReview, setIsCreateNewReview] = useState<boolean>(false);



    const getDataEvent = async () => {      
        
      let url = `https://eth-arg-api.itrock.com.ar/event/event2/${router.split("/").pop()}`
        
        const response = await fetch(url)
        const data = await response.json();

        setEventInfo(data);
    }

    useEffect(() =>{
        getDataEvent()
    }, [])

    useEffect(() => {
        if(isCreateNewReview){
            getDataEvent()
        }
    }, [isCreateNewReview])

    return (
        <>
            {eventInfo &&
            <>
            <div className={styles.banner}></div>
            <div className={styles.reviewsContainer}>
                <ReviewTitle name={eventInfo.title} rate={eventInfo.totalStarts} reviews={eventInfo.totalReviews} country={"Argentina"} date={"19/08/2023"} />
                <h2 className={styles.subtitle}>People say</h2>
                <Comment id={router.split("/").pop() ?? ""} setIsCreateNewReview={setIsCreateNewReview}/>
                {eventInfo.reviews.map((review: IReview, index: number) => {
                    const number = Math.random() * 250 + 1;
                    const likes = Math.floor(number);
                    return <Review key={index} userId={review.userId} stars={review.stars} description={review.description} likes={likes} _id={""} date={""} />
                })}
            </div>
            </>
            }
        </>
    )
}