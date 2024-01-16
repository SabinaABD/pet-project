
export async function getAllPosts(page: number | string = 1): Promise<Array<{
    slug: any;
    id: string | number, name: string, status: string, image: string}>> {
    const content = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    let res = await content.json()
    await wait(2000)
    return res.results
}

export async function getOneCharacter(id: number) {
    const content = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    await wait(2000)
    return await content.json()
}

export async function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}