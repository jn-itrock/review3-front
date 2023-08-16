import { IUser } from "@/app/interfaces/user/index";
import Image from "../../../../../node_modules/next/image";
import styles from './index.module.scss'

interface IHeader {
    user: IUser
}

export function Header({user}: IHeader){
    return (
        <div className={styles.header}>
            <Image src={user.avatar} alt="avatar" width={1} height={1}/>
            <h2>{user.username}</h2>
            <h3>{user.date}</h3>
        </div>
    )
}