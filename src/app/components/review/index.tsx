import { Header } from "./header/index";
import { Rate } from "./rate/index";
import styles from "./index.module.scss"
import { Like } from "./like/index";
import { IUser } from "@/app/interfaces/user/index";

export interface IReview{
    user: IUser
    rate: string
    description: string
    likes: string
}

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