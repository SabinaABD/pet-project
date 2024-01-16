import {getAllPosts} from "@/lib/posts";
import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";

export const Cards = async ({page}: { page: number }) => {

    const characters = await getAllPosts(page)
    return (
        <main className={styles.main}>
            {characters.map((elem ) => (
                <Link key={elem.id} className={styles.card} href={`/${elem.id}`}>
                    <div className={styles.cardInfo}>
                        <h2 className={styles.title}>{elem.name}</h2>
                        <p className={styles.status}>{elem.status}</p>
                        <Image src={elem.image} alt={String(elem.name)} height={100} width={100} />
                    </div>
                </Link>
            ))}
        </main>
    )
}