import Slice_of_life from '@/app/files/slice_of_life'
import Anime from '../components/anime'
import Image from 'next/image'
import Hana from '@/app/images/ano_hana_.jpg'

export default function SliceOfLife() {

    return (
        <main className="SliceOfLife">

            <div className='title-section'>
                <h1>10 Slice of Life Anime you need to watch</h1>
            </div>

            <div className='image-section'>
                <Image src={Hana} alt="Image"></Image>
            </div>

            <div className='page-description'>
                <p>Slice of life anime, which focuses on commonplace events and routine activities, provides an insight into the relationships and everyday experiences of its characters. These shows tackle friendship, family, and human development with a realistic and frequently reflective style. Slice of life anime, which shuns fanciful aspects in favour of the straightforward beauty of daily life, connects with viewers through its sympathetic characters and moving narratives.</p>
            </div>

         
            <Anime data={Slice_of_life} />
            
        </main>
    )

}

