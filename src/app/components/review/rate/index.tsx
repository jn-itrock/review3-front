import Image from "../../../../../node_modules/next/image";
import styles from "./index.module.scss"

interface IRate{
    rate: string
}

export function Rate({rate}: IRate){
    return (
        <div className={styles.rate}>
            <h2>{rate}</h2>

            <div>
                <Image src="/rate/star.png" alt="star" width={1} height={1} />
                <Image src="/rate/star.png" alt="star" width={1} height={1} />
                <Image src="/rate/star.png" alt="star" width={1} height={1} />
                <Image src="/rate/star.png" alt="star" width={1} height={1} />
                <Image src="/rate/middle-star.png" alt="middle-star" width={1} height={1} />
            </div>
        </div>
    )
}