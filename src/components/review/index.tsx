import { Header } from "./header/index";
import { Rate } from "./rate/index";
import styles from "./index.module.scss"
import { Like } from "./like/index";
import { IReview, IUser } from "@/interfaces/user/index";

export function Review({user, rate, description, likes}: IReview){
    return (
        <div className={styles.review}>
            <Header user={user}/>
            <Rate rate={rate}/>
            <p className={styles.description}>{description}</p>
            <Like likes={likes}/>
        </div>
    )
}