import {getAllPosts, getOneCharacter} from "@/lib/posts";
import styles from './styles.module.scss'
import Image from 'next/image'
import {Info} from "@/components/Info/Info";
import {Suspense} from "react";
export async function generateStaticParams() {
    const characters = await getAllPosts()

    return characters.map((character) => ({
        slug: character.slug,
    }))
}
export default async function Page({params}: {params: {slug: number}}) {
    const {slug} = params
    const character = await getOneCharacter(slug)

    return (
            <main className={styles.content}>
                <h1>{character.name}</h1>
                <p>{character.status}</p>
                <Suspense fallback={<div>Loading info...</div>}>
                    <Info slug={slug} />
                </Suspense>
                <Image src={character.image} alt={character.name} height={300} width={300} priority={true}/>
            </main>

    )
}

