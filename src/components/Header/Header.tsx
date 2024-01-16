import Link from "next/link";
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <div className={styles.header}>
            <Link href={'/'}>Home</Link>
            <Link href={`/?page=1`}>first</Link>
            <Link href={`/?page=2`}>second</Link>
            <Link href={`/about`}>about</Link>
        </div>
    )
}