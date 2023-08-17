import { Review } from "../../components/review/index";
import { events } from "../../constants";
import { IEvent, IReview } from "../../interfaces/user/index";
import { ReviewsClient } from "./client";
import { Comment } from "./comment/index";
import styles from "./index.module.scss"
import ReviewTitle from "./reviewTitle/index";

export default function Reviews() {

    const getData = Promise.resolve(1);

    return <>
        <ReviewsClient getData={getData}/>
    </>
}