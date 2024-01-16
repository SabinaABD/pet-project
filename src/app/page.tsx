import {Cards} from "@/components/Cards/Cards";
import {Suspense} from "react";
import Loading from "@/app/loading";
export default async function Home({
                                       searchParams,
                                   }: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const pageNumber =
        typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

    const keyString = `search=${searchParams?.search}`

    return (
        <Suspense key={keyString} fallback={<Loading />}>
            <Cards page={pageNumber}/>
        </Suspense>
  )
}

