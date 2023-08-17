import Image from "../../../node_modules/next/image";
import { Review } from "../../components/review/index";
import { events } from "../../constants";
import { IEvent, IReview } from "../../interfaces/user/index";
import { Comment } from "./comment/index";
import styles from "./index.module.scss"
import ReviewTitle from "./reviewTitle/index";

interface Props {
    getData: Promise<number>;
}

export const ReviewsClient = ({getData}: Props) => {
    return (
        <>
            <div className={styles.banner}></div>
            <div className={styles.reviewsContainer}>
                <ReviewTitle name={events[0].name} rate={events[0].rate} reviews={events[0].reviewsCount} country={events[0].country} date={events[0].date} />
                <h2 className={styles.subtitle}>People say</h2>
                <Comment />
                {events[0].reviews.map((review: IReview, index: number) => {
                    return <Review key={index} user={review.user} rate={review.rate} description={review.description} likes={review.likes} />
                })}
            </div>
        </>
    )
}