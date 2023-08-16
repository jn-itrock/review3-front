import Image from "../../../../node_modules/next/image";
import styles from "./index.module.scss"

export function Comment(){
    return <>
            <div className={styles.comment}>
                <Image src="/avatars/avatar2.png" alt="comment-avatar" width={1} height={2}/>
                <div>
                    <input placeholder="Send your opinion"/>
                </div>
            </div>

            <div className={styles.rate}>
                <div className={styles.starsContainer}>
                    <Image src="/rate/empty-star.png" alt="empty-star" width={1} height={1} />
                    <Image src="/rate/empty-star.png" alt="empty-star" width={1} height={1} />
                    <Image src="/rate/empty-star.png" alt="empty-star" width={1} height={1} />
                    <Image src="/rate/empty-star.png" alt="empty-star" width={1} height={1} />
                    <Image src="/rate/empty-star.png" alt="empty-star" width={1} height={1} />
                </div>

                <div className={styles.buttonsContainer}>
                    <button className={styles.cancel}>Cancel</button>
                    <button className={styles.accept}>Review</button>
                </div>
            </div>
        </>
        
}