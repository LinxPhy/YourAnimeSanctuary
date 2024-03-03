import ActionPage from '@/app/files/action'
import Anime from '../components/anime'
import Vinland from '@/app/images/vinland_.jpg'
import Image from 'next/image'

export default function Action() {

    return (
        <main className="Action">

            <div className='title-section'>
                <h1>10 Action Anime you need to watch</h1>
            </div>

            <div className='image-section'>
                <Image src={Vinland} alt="Image"></Image>
            </div>

            <div className='page-description'>
                <p>Action anime are all about intensive battles and epic showdowns with the lead character pushing himself to its limit through skill, experience, resilience and courage. <br></br> Whether this includes mecha warriors, sword fighting characters or gun battles, action anime captivates the audience with intricate plots and dire consequences. This list contains some of the best anime in the last two decades, in no particular order, filled with blood-pumping moments that will keep you on the edge of your seat. </p>
            </div>

         
            <Anime data={ActionPage} />
            
        </main>
    )

}

