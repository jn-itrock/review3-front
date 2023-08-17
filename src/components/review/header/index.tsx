import { IUser } from "@/interfaces/user/index";
import Image from "../../../../node_modules/next/image";
import styles from './index.module.scss'

interface Props {
    user: string;
}


export function Header({ user }: Props){
    return (
        <div className={styles.header}>
            <Image src="/avatars/avatarMock.svg" alt="avatar" width={1} height={1}/>
            <h3>{user}</h3>
        </div>
    )
}