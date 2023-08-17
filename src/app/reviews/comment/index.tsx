"use client"
import { Dispatch, KeyboardEventHandler, SetStateAction, useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss"
import { useActiveProfile } from "@lens-protocol/react-web";

interface Props {
    id: string;
    setIsCreateNewReview: Dispatch<SetStateAction<boolean>>;
}

interface PropsValues {
    userId: string;
    description: string;
    stars: number;
}

export function Comment({ id, setIsCreateNewReview }: Props){

    const [value, setValue] = useState<string>("")
    const [rate, setRate] = useState<number>(0)
    const { data: activeProfile } = useActiveProfile();

    const handleStarClick = (starNumber: number) => {
        if (starNumber === 1 && starNumber === rate) {
            setRate(0);
        } else {
            setRate(starNumber);
        }
    }; 

    const handleCreateReview = () => {
        createPost();
    };


    const createPost = async () => {

        const data: PropsValues = {
            userId: activeProfile?.handle ?? "",
            description: value,
            stars: rate
        }

        let url = `https://eth-arg-api.itrock.com.ar/review/${id}`

        await fetch(url,{
            method: "POST",
            body: JSON.stringify(data)
        })

        setIsCreateNewReview(true)
    }

    return <>
            <div className={styles.comment}>
                <Image src="/avatars/avatar2.png" alt="comment-avatar" width={1} height={2}/>
                <div>
                    <input onKeyUp={(e: any)=>{setValue(e.target.value)}} placeholder="Send your opinion"/>
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