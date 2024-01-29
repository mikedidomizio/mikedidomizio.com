import { ReactNode } from 'react'

export const ImageWithCaption = ({ image, caption }: { image: ReactNode; caption: string }) => {
  return (
    <figure className="flex flex-col text-center">
      {image}
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
