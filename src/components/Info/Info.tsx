import {getOneCharacter, wait} from "@/lib/posts";

export const Info = async ({slug}: {slug: number}) => {

    const characterInfo = await getOneCharacter(slug)
    const info = characterInfo.species
    await wait(5000)

    return (
        <div>{info}</div>
    )
}