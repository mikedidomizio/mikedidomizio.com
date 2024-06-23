import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'

const booksRead = [
  {
    categoryName: 'Career',
    books: [
      {
        title: 'Staff Engineer: Leadership Beyond the Management Track',
        // myThoughts: 'I thought this was a good book',
        author: 'Will Larson',
        href: 'https://staffeng.com/book',
        imgSrc: '/static/books/staff-engineer-leadership-beyond-book-will-larson.jpg',
      },
      {
        title: "The Staff Engineer's Path",
        // myThoughts: 'I thought this was a good book',
        author: 'Tanya Reilly',
        href: 'https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/',
        imgSrc: '/static/books/staff-engineers-path-book-tanya-reilly.jpeg',
      },
    ],
  },
]

export const metadata = genPageMetadata({ title: 'Reading' })

export default function Reading() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Reading
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Books I've read and recommend
          </p>
        </div>
        <div className="container py-12">
          {booksRead.map((category) => {
            return (
              <div key={category.categoryName}>
                <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                  {category.categoryName}
                </h2>
                <div className="-m-4 flex flex-wrap">
                  {category.books.map((d) => (
                    <Card
                      key={d.title}
                      title={d.title}
                      // description={d.myThoughts}
                      imgSrc={d.imgSrc}
                      href={d.href}
                    >
                      <Link
                        href={d.href}
                        className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Link to site for ${d.title}`}
                      >
                        Learn more about this book
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
