import {ReactNode} from "react";

export const TextAroundImage = ({ image, text, tailwindImageWrapperClasses }: { image: ReactNode, text: ReactNode, tailwindImageWrapperClasses: string }) => {
    return <>
        <div className={`float-right ${tailwindImageWrapperClasses}`}>
            {image}
        </div>
        <div>
            {text}
        </div>
    </>
}
