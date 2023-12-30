import {ReactNode} from "react";

export const ImageWithFigCaption = ({ caption, children}: { caption: string, children: ReactNode }) => {
    return <figure>
        {children}
        <figcaption className="italic text-center">{caption}</figcaption>
    </figure>
}
