import Link from "next/link"

export function Navigation(){

    return (
        <nav>
            <ul>
                <li><Link href={'/underrated'}>Underrated</Link></li>
                <li><Link href={'/action'}>Action</Link></li>
                <li><Link href={'/mystery'}>Mystery</Link></li>
                <li><Link href={'/romance'}>Romance</Link></li>
                <li><Link href={'/classics'}>Classics</Link></li>
                <li><Link href={'/sports'}>Sports</Link></li>
                <li><Link href={'/slice-of-life'}>Slice of Life</Link></li>
            </ul>
        </nav>
    )

}