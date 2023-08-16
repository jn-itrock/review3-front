import { IReview, Review } from "../components/review/index";
import { reviewsData } from "../constants/index";

export default function Reviews(){
    return <div>
        {reviewsData.map((review: IReview, index: number)=>{
            return <Review user={review.user} rate={review.rate} description={review.description} likes={review.likes}/>
        })}
        </div>
    
}