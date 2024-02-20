import Image from "next/image"
import MAL from '@/app/icons/MAL.png'
import Crunchyroll from '@/app/icons/crunchyroll.webp'
import Youtube from '@/app/icons/youtube.webp'

export default function Anime(props: any) {

    const data = props.data

    return (
        <section className="anime-content">

            <div className="anime-content-main">
                {data.map((anime: any) => {
                    return (
                        <div className="anime" key={anime.id}>
                            <div className="anime-header">
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
                                    <Image src={anime.image} width={650} height={650} alt="anime-image"></Image>
                                </div>
                                :
                                <div className="anime-image"></div>
                            }


                            <div className="anime-icons">
                                <Image src={MAL} width={'30'} height={'30'} alt="MAL"></Image>
                                <Image src={Crunchyroll} width={'30'} height={'30'} alt="Crunchyroll"></Image>
                                <Image src={Youtube} width={'30'} height={'30'} alt="Youtube"></Image>
                            </div>


                            <div className="anime-description">
                                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, officia sapiente? Voluptas possimus impedit error molestiae, libero architecto inventore temporibus necessitatibus consequatur fugit iure cupiditate illum sit sint praesentium quas.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure soluta, eos voluptas, qui, expedita id ut porro quis quam exercitationem ipsam natus at architecto. Maiores cumque labore blanditiis amet.</p> */}
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
                </div>

            </div>

        </section>
    )
}