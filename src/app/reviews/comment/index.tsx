"use client"
import { useState } from "react";
import Image from "../../../../node_modules/next/image";
import styles from "./index.module.scss"

export function Comment(){

    const [value, setValue] = useState("")
    const [rate, setRate] = useState(0)

    const handleStarClick = (starNumber: number) => {
        if (starNumber === 1 && starNumber === rate) {
            setRate(0);
        } else {
            setRate(starNumber);
        }
    }; 

    const handleCreateReview = () => {
        console.log({
            review: value,
            rate
        })
    };

    return <>
            <div className={styles.comment}>
                <Image src="/avatars/avatar2.png" alt="comment-avatar" width={1} height={2}/>
                <div>
                    <input onKeyUp={(e)=>{setValue(e.target.value)}} placeholder="Send your opinion"/>
                </div>
            </div>

            {value != "" && <div className={styles.rate}>
                <div className={styles.starsContainer}>
                {[1, 2, 3, 4, 5].map((starNumber) => (
                    <Image
                        key={starNumber}
                        src={starNumber <= rate ? "/rate/star.png" : "/rate/empty-star.png"}
                        alt={starNumber <= rate ? "star" : "empty-star"}
                        width={1}
                        height={1}
                        onClick={() => handleStarClick(starNumber)}
                    />
                ))}
                </div>

                <div className={styles.buttonsContainer}>
                    <button className={styles.cancel}>Cancel</button>
                    <button 
                        className={styles.accept}
                        onClick={handleCreateReview}
                    >Review
                    </button>
                </div>
            </div>}
        </>
        
}