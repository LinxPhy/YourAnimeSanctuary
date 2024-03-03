import RomancePage from '@/app/files/romance'
import Anime from '../components/anime'
import Image from 'next/image'
import Tonikaku from '@/app/images/tonikaku_.jpg'

export default function Romance() {

    return (
        <main className="Romance">

            <div className='title-section'>
                <h1>10 Romance Anime you need to watch</h1>
            </div>

            <div className='image-section'>
                <Image src={Tonikaku} alt="Image"></Image>
            </div>

            <div className='page-description'>
                <p>From tender moments to heart-wrenching dilemmas, each episode explores themes of affection, devotion, and self-discovery. With captivating storytelling and endearing characters, romance anime captivates viewers with its emotional depth, portraying the beauty and complexity of human emotions in the pursuit of love and happiness.</p>
                <p>While acknowledging potential controversy in our selections, we prioritized featuring anime that our team has personally watched and experienced. This approach ensures a curated list based on firsthand knowledge rather than solely relying on potentially highly rated but unwatched romance anime.</p>
            </div>

         
            <Anime data={RomancePage} />
            
        </main>
    )

}

