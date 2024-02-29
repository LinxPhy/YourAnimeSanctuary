'use client'
import Image from 'next/image';
import { useState } from "react";
import getAnimeNews from "./getAnimeNews"

// export default async function AnimeNews() {
//     const { data }: any = await getAnimeNews()

//     return (
//         <div className="anime-news-area">
//             {data.map((anime: any, key: number) => {
//                 return (
//                     <article className="article-news" key={key}>
//                         <LoadImage data={anime.images.jpg.image_url} />
//                     </article>
//                 )
//             })}
//         </div>
//     )

// }

export default function LoadImage(imageURL: any){

    const [imageLoadError, setImageLoadError] = useState(false)

    return (
        <>
            {!imageLoadError ? (
                <Image
                    src={imageURL.data}
                    width={300}
                    height={300}
                    alt="Article Image"
                    onError={() => setImageLoadError(true)}
                >
                </Image>
            ) : (
                <div className='placeholder_div'>

                </div>
            )}
        </>
    )

}

