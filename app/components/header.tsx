import Link from "next/link"

export function Header(){

    return(
        <header>
            <ul>
                <li>  </li>
                <li className="header-middle"><Link href={'/'}>Your Anime-Sanctuary</Link></li>
                <li>  </li>
            </ul>
        </header>
    )

}