import Link from "next/link"

export function Navigation() {

    return (
        <nav>
            <ul>
                <Link href={'/action'}>
                    <li>
                        Action
                    </li>
                </Link>
                <Link href={'/mystery'}>
                    <li>
                        Mystery
                    </li>
                </Link>
                <Link href={'/romance'}>
                    <li>
                        Romance
                    </li>
                </Link>

                <Link href={'/classics'}>
                    <li>
                        Classics
                    </li>
                </Link>

                <Link href={'/slice_of_life'}>
                    <li>
                        Slice of Life
                    </li>
                </Link>
                <Link href={'/underrated'}>
                    <li>
                        Underrated
                    </li>
                </Link>
            </ul>
        </nav>
    )

}