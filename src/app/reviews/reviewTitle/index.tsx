import Image from "../../../../node_modules/next/image"
import styles from "./index.module.scss"

interface IReviewTitle {
    name: string
    rate: string
    reviews: string
    country: string
    date: string
}

export default function ReviewTitle({name, rate, reviews, country, date}: IReviewTitle){
    return <>
                <div className={styles.reviewTitle}>
                    <h1>{name}</h1>
                    <div>
                        <div>
                            <p>{rate}</p>
                            <Image src="/rate/star.png" alt="review-star" width={1} height={1}/>
                        </div>
                        <p>{reviews} review</p>
                    </div>
                </div>

                <p className={styles.eventData}>{country} | {date}</p>
            </>
    
}