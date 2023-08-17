import Image from "../../../../node_modules/next/image";
import styles from './index.module.scss'

interface ILike{
    likes: string
}

export function Like({likes}: ILike){
    return (
      <div className={styles.like}>
        <span >
          <Image src="/like/like.png" alt="avatar" width={20} height={20}/>
            <h2 style={{'margin': '5px 0'}}>{likes}</h2>
        </span>
      </div>
    )
}
