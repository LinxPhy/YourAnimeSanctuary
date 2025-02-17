import getAnimeNews from "./components/getAnimeNews";
import Image from 'next/image';
import HeroImage from './images/hero_image.jpeg'
import Item1 from './images/darwin.jpg'
import Item2 from './images/erased.png'
import Item3 from './images/dragon_ball.webp'
import Item4 from './images/no_game.jpg'
import Item5 from './images/tonikaku.jpg'
import Item6 from './images/spy_x_family.jpg'
import AI from './images/AI.jpg'
import LoadImage from "./components/animeNews";
import Link from "next/link";

export default async function Home() {
  const { data }: any = await getAnimeNews()


  return (
    <main className="Homepage">


      <section className="hero">
        <Image src={HeroImage} alt='Hero Image'></Image>

        <div className='hero-description'>
          <h1>Your Anime Sanctuary</h1>
          <p>
            Are you looking for an anime to watch or interested in viewing our collection of some of the most underrated titles? Then look no further...
          </p>
          <br></br>
          <p>
            We have componsed multiple top lists on anime in no particular order you must watch on each category. From Action to Mystery to Slice of Life, we pray to have
            created lists not only for new anime watchers but also for experienced watchers looking for missed hidden gems.
          </p>
          <br></br>
          <p>
            The lists have been created by the owner, <b>based on titles he has watched</b>, with an hidden gem in each category. If you are unsure what anime to watch, you can&apos;t make a mistake with the anime highlighted.
            Hope you enjoy our lists.
          </p>
        </div>
      </section>

      <section className='categories'>

        <div className='section-header'>
          <h2>Categories</h2>
        </div>

        <div className='items'>

          <div className='item1'>
            <Link href={'/action'}>
              <Image src={Item1} alt='Image-Image'></Image>
            </Link>
            <div className='item-description'>
              <h3>Action</h3>
              <p>Are you into fast-paced scenes or high-stakes battles? Well look no further</p>
            </div>
          </div>

          <div className='item2'>
            <Link href={'/mystery'}>
              <Image src={Item2} alt='Image-Image'></Image>
            </Link>
            <div className='item-description'>
              <h3>Mystery</h3>
              <p>Mystery anime is all about resolving dubious questions surrounding a character or environment. What will the truth unveil? </p>
            </div>
          </div>
          <div className='item3'>
            <Link href={'/classics'}>
              <Image src={Item3} alt='Image-Image'></Image>
            </Link>
            <div className='item-description'>
              <h3>Classics</h3>
              <p>This includes animes hits when you were growing up including hidden gems... Timeless relics that can be enjoyed no matter the era </p>
            </div>
          </div>
          <div className='item4'>
            <Link href={'/underrated'}>
              <Image src={Item4} alt='Image-Image'></Image>
            </Link>
            <div className='item-description'>
              <h3>Underrated / Hidden Gems</h3>
              <p>Are you looking for amazing anime that you might have missed? Check out our underrated / hidden gems collection</p>
            </div>
          </div>
          <div className='item5'>
            <Link href={'/romance'}>
              <Image src={Item5} alt='Image-Image'></Image>
            </Link>
            <div className='item-description'>
              <h3>Romance</h3>
              <p>Are you into heartwarming experiences between characters? Warm your heart with Romance</p>
            </div>
          </div>
          <div className='item6'>
            <Link href={'/slice_of_life'}>
              <Image src={Item6} alt='Image-Image'></Image>
            </Link>
            <div className='item-description'>
              <h3>Slice of Life</h3>
              <p>Interested in specific characters&apos;s daily life? Fill yourself in with our slice of life collection of anime containing characters making friends or finding love or overcoming obstacles  </p>
            </div>
          </div>
        </div>
      </section>




      <section className='homepage-api'>
        <div className='section-header'>
          <h2>Anime News</h2>
        </div>

        <div className="anime-news-area">
          {data.map((anime: any, key: number) => {
            return (
              <article className="article-news" key={key}>
                <Link href={anime.forum_url}>
                  <LoadImage data={anime.images.jpg.image_url} />
                </Link>
                <div className="article-main">
                  <h3>{anime.title}</h3>
                  <div className="article-text">
                    <p>{anime.excerpt}</p>
                    <Link href={anime.forum_url}>
                      <button className="buttonStyle1">Visit</button>
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}

        </div>

      </section>

      <section className='homepage-extra'>

        <div className='section-header'>
          <h2>Extra</h2>
        </div>

        <div className='extra-content'>

          <div className='shyka'>
            <Link href={'https://shyka.co.uk/'}>
              <Image src={AI} alt='Image'></Image>
            </Link>

            <div className='content-description'>
              <h3>Shyka | AI Chatbots</h3>
              <div>
                <p>Interested in AI Chatbots? If you want to interact with your favourite anime/celebrities/superheroes then look no further.</p>
                <Link href={'https://shyka.co.uk/'}>
                  <button className="buttonStyle1">Visit</button>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}


