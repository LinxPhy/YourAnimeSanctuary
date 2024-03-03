import ClassicPage from '@/app/files/classics'
import Anime from '../components/anime'
import Image from 'next/image'
import Reborn from '@/app/images/reborn_.jpg'

export default function Classic() {

    return (
        <main className="Classic">

            <div className='title-section'>
                <h1>10 Classics Anime you need to watch</h1>
            </div>

            <div className='image-section'>
                <Image src={Reborn} alt="Image"></Image>
            </div>

            <div className='page-description'>
                <p>
                    Classics in anime are revered for their enduring influence and unforgettable impact over time. These iconic series often set the standard for future generations, with titles like Dragon Ball Z, originating in 1989, serving as prime examples. Their lasting legacy can still be felt in modern anime, showcasing how these timeless works continue to shape and inspire the medium to this day.
                </p>
                <p>We tried to include a mixture of anime, some known and some unknown to give you a chance to discover some hidden gems that you might have never heard of. <br></br> Trust me, it was painful to trying to keep the list under 10. </p>
            </div>

         
            <Anime data={ClassicPage} />
            
        </main>
    )

}

