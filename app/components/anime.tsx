import Image from "next/image"
import MAL from '@/app/icons/MAL.png'
import Crunchyroll from '@/app/icons/crunchyroll.webp'
import Youtube from '@/app/icons/youtube.webp'
import AmazonPrime from '@/app/icons/amazonPrime.png'
import Hulu from '@/app/icons/hulu.png'
import Netflix from '@/app/icons/netflix.png'
import Hidive from '@/app/icons/hidive.png'
import getAnimeNews from "./getAnimeNews"
import Link from "next/link";

export default async function Anime(props: any) {

    const news = await getAnimeNews()

    const data = props.data

    return (
        <section className="anime-content">

            <div className="anime-content-main">
                {data.map((anime: any) => {
                    return (
                        <div className="anime" key={anime.id}>
                            <div className={`anime-header ${anime.gem} `}>
                                <span>{anime.id}</span>
                                <h2>{anime.title}</h2>
                            </div>

                            <div className="anime-info">
                                <ul>
                                    <li>Episodes - {anime.episodes}</li>
                                    <li>Seasons  - {anime.seasons}</li>
                                    <li>Release Date - #</li>
                                    <li>Genre - #</li>
                                </ul>
                            </div>

                            {anime.image ?
                                <div className="anime-imagesection">
                                    <Image src={anime.image} loading="lazy" width={650} height={650} alt="anime-image"></Image>
                                </div>
                                :
                                <div className="anime-image"></div>
                            }


                            <div className="anime-icons">
                                <Link href={anime.url}>
                                    <Image src={MAL} width={'30'} height={'30'} alt="MAL"></Image>
                                </Link>

                                
                                { 
                                    anime.cruncyroll ?  <Link href={anime.cruncyroll}> <Image src={Crunchyroll} width={'30'} height={'30'} alt="Crunchyroll"></Image> </Link>:
                                    anime.amazonPrime ?  <Link href={anime.amazonPrime}> <Image src={AmazonPrime} width={'30'} height={'30'} alt="Crunchyroll"></Image> </Link> :
                                    anime.netflix ?  <Link href={anime.netflix}> <Image src={Netflix} width={'30'} height={'30'} alt="Crunchyroll"></Image> </Link>:
                                    anime.hulu ?  <Link href={anime.hulu}> <Image src={Hulu} width={'30'} height={'30'} alt="Crunchyroll"></Image> </Link> :
                                    anime.hidive ? <Link href={anime.hidive}> <Image src={Hidive} width={'30'} height={'30'} alt="Crunchyroll"></Image> </Link>:
                                    <></>
                                }

                                <Link href={anime.youtube}>
                                    <Image src={Youtube} width={'30'} height={'30'} alt="Youtube"></Image>
                                </Link>
                            </div>


                            <div className="anime-description">
                                <p>{anime.description}</p>
                            </div>

                        </div>
                    )
                })}
            </div>

            <div className="anime-content-navigation ">
                <div>
                    <div className="section-header">
                        <h2>Additional Content</h2>
                    </div>

                    <ul>
                        <li>10 Underrated Anime you need to watch</li>
                        <li>10 Action Anime you need to watch</li>
                        <li>10 Mystery Anime you need to watch</li>
                        <li>10 Romance Anime you need to watch</li>
                        <li>10 Classics Anime you need to watch</li>
                        <li>10 Sports Anime you need to watch</li>
                        <li>10 Slice of Life Anime you need to watch</li>
                    </ul>

                </div>

                <div>
                    <div className="section-header">
                        <h2>News</h2>
                    </div>

                    <ol>
                        {news.data.map((item: any, key: number) => {
                            return (
                                <Link key={key} href={item.forum_url}>
                                    <li>{item.title}</li>
                                </Link>
                            )
                        })}
                    </ol>
                </div>

            </div>

        </section>
    )
}