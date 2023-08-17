import Image from "../../../../node_modules/next/image";
import styles from './index.module.scss'

interface ILike{
    likes: string
}

export function Like({likes}: ILike){
    return (
        <div className={styles.like}>
            <Image src="/like/like.png" alt="avatar" width={1} height={1}/>
            <h2>{likes}</h2>
        </div>
    )
}