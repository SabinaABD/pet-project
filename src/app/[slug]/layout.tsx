import styles from "@/app/[slug]/styles.module.scss";
import {Suspense} from "react";
import Loading from "@/app/loading";
export default function Layout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.container}>
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </div>
    )
}
