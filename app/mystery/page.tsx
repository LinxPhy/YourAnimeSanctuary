import MysteryPage from '@/app/files/mystery'
import Anime from '../components/anime'
import Image from 'next/image'
import Resonance from '@/app/images/resonance_.jpg'

export default function Mystery() {

    return (
        <main className="Mystery">

            <div className='title-section'>
                <h1>10 Mystery Anime you need to watch</h1>
            </div>

            <div className='image-section'>
                <Image src={Resonance} alt="Image"></Image>
            </div>

            <div className='page-description'>
                <p>
                    Mystery anime plunges viewers into suspenseful realms where viewers are met with scenarios filled with intricate puzzles that must be overcomed. From crimes to supernatural phenomena they are filled with a captivating storytelling, multiple plot twists and often ingenious characters to handle the various twists and turns. 
                    <br></br>
                    
                </p>
            </div>

         
            <Anime data={MysteryPage} />
            
        </main>
    )

}

