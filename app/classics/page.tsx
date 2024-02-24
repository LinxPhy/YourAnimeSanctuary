import ClassicPage from '@/app/files/classics'
import Anime from '../components/anime'

export default function Classic() {

    return (
        <main className="Classic">

            <div className='title-section'>
                <h1>10 Classics Anime you need to watch</h1>
            </div>

            <div className='page-image-section'>

            </div>

            <div className='page-description'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto mollitia obcaecati laudantium sunt inventore ab placeat totam perferendis sit animi debitis, reiciendis voluptas esse nesciunt architecto libero, fuga voluptatum! Blanditiis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis distinctio reiciendis omnis adipisci impedit illo nam sequi. Consectetur consequatur nam accusamus totam quod numquam eius, molestiae quos voluptas sequi similique.</p>
            </div>

         
            <Anime data={ClassicPage} />
            
        </main>
    )

}

