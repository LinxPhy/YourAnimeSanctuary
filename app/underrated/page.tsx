import UnderratedPage from '@/app/files/underrated'
import Anime from '../components/anime'
import Image from 'next/image'
import Spice from '@/app/images/spice_.jpg'

export default function Underrated() {

    return (
        <main className="Underrated">

            <div className='title-section'>
                <h1>15 Underrated / Hidden gems Anime you need to watch</h1>
            </div>

            <div className='image-section'>
                <Image src={Spice} alt="Image"></Image>
            </div>

            <div className='page-description'>
                <p>Underrated anime are hidden gems that have not received any adequate recognition despite their quality. They are mostly overshadowed by more popular titles or overlooked due to their limited exposure </p>
                <p>This list contains some of the best hidden gems, in no particular order, filled with somehow unknown anime, anime noone knows about or anime people tend to overlook. They are simply amazing anime, some as good as the most popular titles.</p>

            </div>

         
            <Anime data={UnderratedPage} />
            
        </main>
    )

}

