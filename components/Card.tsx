import Image from './Image'
import Link from './Link'
import { PropsWithChildren, ReactNode } from 'react'

const CardContainer = ({ children }: PropsWithChildren) => {
  return <div className="md max-w-[544px] p-4 md:w-1/2">{children}</div>
}

const CardTitle = ({ href, title }: { href?: string; title }) => {
  return (
    <h3 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          {title}
        </Link>
      ) : (
        title
      )}
    </h3>
  )
}

const CardDescription = ({ children }) => {
  return <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{children}</p>
}

export const LearnMore = ({ href, title }: { href?: string; title: string }) => {
  return href ? (
    <Link
      href={href}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
      aria-label={`Link to ${title}`}
    >
      Learn more &rarr;
    </Link>
  ) : null
}

const CardImage = ({ imgSrc, href, title }: { imgSrc?: string; href?: string; title: string }) => {
  return (
    imgSrc &&
    (href ? (
      <Link href={href} aria-label={`Link to ${title}`}>
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={306}
        />
      </Link>
    ) : (
      <Image
        alt={title}
        src={imgSrc}
        className="object-cover object-center md:h-36 lg:h-48"
        width={544}
        height={306}
      />
    ))
  )
}

const Card = ({
  children,
  title,
  description,
  imgSrc,
  href,
}: {
  children: ReactNode
  title: string
  description?: ReactNode
  imgSrc?: string
  href?: string
}) => (
  <CardContainer>
    <div
      className={`${
        imgSrc && 'h-full'
      } border-opacity-60 overflow-hidden rounded-md border-2 border-gray-200 dark:border-gray-700`}
    >
      <CardImage imgSrc={imgSrc} href={href} title={title} />
      <div className="p-6">
        <CardTitle href={href} title={title} />
        {description ? <CardDescription>{description}</CardDescription> : null}
        {children}
      </div>
    </div>
  </CardContainer>
)

export default Card
