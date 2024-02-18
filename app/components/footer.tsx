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
                </div>
            </div>

            <div className="footer-message">
                <p>YourAnimeSanctuary © 2024 - All Rights Reserved</p>
            </div>

        </footer>
    )





}