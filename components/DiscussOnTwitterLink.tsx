'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

export const DiscussOnTwitterLink = () => {
    const pathname = usePathname()
    const fullUrl = `https://mikedidomizio.com/${pathname}`

    return <Link className="btn" href={`https://twitter.com/search?q=${encodeURIComponent(fullUrl)}`}>Discuss on Twitter/X</Link>
}
