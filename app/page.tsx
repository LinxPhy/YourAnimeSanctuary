import Image from 'next/image';
import HeroImage from './images/hero_image.jpeg'
import Item1 from './images/emminence_in_shadow.jpg'
import Item2 from './images/erased.png'
import Item3 from './images/dragon_ball.webp'
import Item4 from './images/kuroko_no_basket.jpg'
import Item5 from './images/tonikaku.jpg'
import Item6 from './images/spy_x_family.jpg'
import AI from './images/AI.jpg'

export default function Home() {
  return (
    <main className="Homepage">


      <section className="hero">
        {/* <Image src={HeroImage} alt='Hero Image'></Image> */}

        {/* <div className='image-cover'>
          Top 10 Underrated Anime
        </div> */}

        <div className='hero-description'>
          <h1>Your Anime Sanctuary</h1>
          <p>
            Are you looking for animes to watch or interested in some of the best underrated animes? Then look no further...
            <br></br>
            We have componsed multiple top 10 lists on animes you must watch on each category.
          </p>
        </div>
      </section>

      <section className='categories'>

        <div className='section-header'>
          <h2>Categories</h2>
        </div>

        <div className='items'>

          <div className='item1'>
            <Image src={Item1} alt='Image-Image'></Image>
            <div className='item-description'>
              <h3>Action</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laborum sint dolorem explicabo ipsam, voluptatum velit, rem pariatur beatae ad quidem dignissimos harum doloribus nesciunt! Dicta ipsum pariatur magnam sed?</p>
            </div>
          </div>

          <div className='item2'>
            <Image src={Item2} alt='Image-Image'></Image>
            <div className='item-description'>
              <h3>Mystery</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ullam tempore dignissimos impedit sit ab, ex praesentium voluptate eligendi temporibus incidunt cupiditate numquam deserunt corrupti obcaecati dicta porro cumque iure.</p>
            </div>
          </div>
          <div className='item3'>
            <Image src={Item3} alt='Image-Image'></Image>
            <div className='item-description'>
              <h3>Classics</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex magnam sequi molestiae nesciunt alias rerum ipsa sit perspiciatis debitis magni illo architecto, molestias fugiat inventore deserunt harum adipisci beatae!</p>
            </div>
          </div>
          <div className='item4'>
            <Image src={Item4} alt='Image-Image'></Image>
            <div className='item-description'>
              <h3>Sports</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci, placeat cumque deserunt, a maiores temporibus quos non tempore aspernatur ad, perferendis beatae. Iusto quia voluptatum minima fuga excepturi. Eveniet.</p>
            </div>
          </div>
          <div className='item5'>
            <Image src={Item5} alt='Image-Image'></Image>
            <div className='item-description'>
              <h3>Romance</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deserunt nisi eligendi, reprehenderit et dolore mollitia excepturi minus, quam voluptatum officiis aspernatur, a ad sunt obcaecati! Nulla sapiente vitae unde.</p>
            </div>
          </div>
          <div className='item6'>
            <Image src={Item6} alt='Image-Image'></Image>
            <div className='item-description'>
              <h3>Slice of Life</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati debitis possimus a! Vero, quam esse aliquid praesentium laboriosam itaque hic earum ad vitae. Rem unde fugiat eveniet exercitationem, ducimus voluptates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='homepage-extra'>

        <div className='section-header'>
          <h2>Extra</h2>
        </div>

        <div className='extra-content'>

          <div className='shyka'>
            <Image src={AI} alt='Image'></Image>
            <div className='content-description'>
              <h3>Shyka | AI Chatbots</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia atque quibusdam aspernatur quos inventore, nisi sit nemo cumque tempore, amet vel, aliquam eveniet quasi aliquid fugit et quo modi illum.</p>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}
