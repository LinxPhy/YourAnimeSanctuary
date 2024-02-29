import Link from "next/link";

export function Footer() {

    return (
        <footer>
            <div className="footer-main">
                <div>
                    <span>Useful Links</span>
                    <ul>
                        <li><Link href={'/underrated'}>Underrated</Link></li>
                        <li><Link href={'/action'}>Action</Link></li>
                        <li><Link href={'/mystery'}>Mystery</Link></li>
                        <li><Link href={'/romance'}>Romance</Link></li>
                        <li><Link href={'/classics'}>Classics</Link></li>
                        <li><Link href={'/sports'}>Sports</Link></li>
                        <li><Link href={'/slice-of-life'}>SliceOfLife</Link></li>
                    </ul>
                </div>
                <div>
                    <span>Extra Content</span>
                    <ul>
                        <li>
                            <Link href={'/'}>Shyka | AI Chatbots</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <span>Links</span>
                    <ul>
                        <li><Link href={'https://myanimelist.net/anime.php'}>MyAnimeList</Link></li>
                        <li><Link href={'https://www.amazon.co.uk/gp/video/storefront'}>AmazonPrimeVideo</Link></li>
                        <li><Link href={'https://www.crunchyroll.com/'}>Crunchyroll</Link></li>
                        <li><Link href={'https://www.hulu.com/welcome?orig_referrer=https%3A%2F%2Fwww.google.com%2F'}>Hulu</Link></li>
                        <li><Link href={'https://www.netflix.com/gb/'}>Netflix</Link></li>
                        <li><Link href={'https://www.hidive.com/dashboard'}>HIDive</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-message">
                <p>YourAnimeSanctuary © 2024 - All Rights Reserved</p>
            </div>

        </footer>
    )





}