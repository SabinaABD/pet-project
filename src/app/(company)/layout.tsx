import {Suspense} from "react";
import Link from "next/link";
import styles from '../page.module.css'
export default function Layout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className={styles.header}>
                <Link href={`/about`}>About</Link>
                <Link href={`/join`}>Join</Link>
                <Link href={`/team`}>Team</Link>
            </div>

                <Suspense>
                    <div className={styles.content}>
                        {children}
                    </div>
                </Suspense>


        </>
    )
}
