import Link from "next/link";
import {ReactNode} from "react";

export const BlogPostCard = ({ date, image, link, tags, title }: { date: string, image: ReactNode, link: string, tags: string[], title: string }) => {
    return <div className="w-full">
        <Link href={link}>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure>{image}</figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p>{date}</p>
                    <div className="card-actions justify-end">
                        {tags.map((tag) => {
                            return <div key={tag} className="badge badge-outline">{tag}</div>
                        })}
                    </div>
                </div>
            </div>
        </Link>
    </div>
}
