import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'

// in order of date read with newest first
const booksRead = [
  {
    categoryName: 'General',
    books: [
      {
        title: 'Atomic Habits',
        myThoughts: `This is a wonderful book for anyone to read, and would be a great gift. I think there's something 
        in here for everyone to benefit from. Not only is it about forming good habits and breaking out of bad habits, 
        but compounding on forming habits. I went in with zero knowledge or intention but it actually helped break me 
        out of a bad habit I had for 25 years.`,
        author: 'James Clear',
        href: 'https://jamesclear.com/atomic-habits',
        imgSrc: '/static/books/atomic-habits.png',
      },
    ],
  },
  {
    categoryName: 'Software Career',
    books: [
      {
        title: "The Staff Engineer's Path",
        myThoughts: `I think I preferred this over "Staff Engineer", but I recommend reading both. It really solidified my understanding
        of what a Staff Engineer is, how they should work, what they should work on, and manage their time.`,
        author: 'Tanya Reilly',
        href: 'https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/',
        imgSrc: '/static/books/staff-engineers-path-book-tanya-reilly.jpeg',
      },
      {
        title: 'Staff Engineer: Leadership Beyond the Management Track',
        myThoughts: `I thought this was a great book and I'd recommend this for anyone looking to become a Staff
        Engineer or is already one. I recommend reading this alongside "The Staff Engineer's Path". Before becoming a Staff 
        myself, It really helped confirmed some practices I had already put in place.`,
        author: 'Will Larson',
        href: 'https://staffeng.com/book',
        imgSrc: '/static/books/staff-engineer-leadership-beyond-book-will-larson.jpg',
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
        <div className="container space-y-12 py-12">
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
                      description={d.myThoughts}
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
