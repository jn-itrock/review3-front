import Image from "../../../node_modules/next/image";
import { Review } from "../components/review/index";
import { IEvent, IReview } from "../interfaces/user/index";
import { Comment } from "./comment/index";
import styles from "./index.module.scss"
import ReviewTitle from "./reviewTitle/index";

export default function Reviews({name, rate, country, date, reviews, reviewsCount}: IEvent){
    return <>
                <div className={styles.banner}></div>
                <div className={styles.reviewsContainer}>
                    <ReviewTitle name={name} rate={rate} reviews={reviewsCount} country={country} date={date}/>
                    <h2 className={styles.subtitle}>People say</h2>
                    <Comment/>
                    {reviews.map((review: IReview, index: number)=>{
                        return <Review user={review.user} rate={review.rate} description={review.description} likes={review.likes}/>
                    })}
                </div>
            </>   
}