import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <>
      <object
        data="/static/semantic-versioning/SemanticVersioning.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        Could not load PDF - Here is a{' '}
        <a href="/static/semantic-versioning/SemanticVersioning.pdf">link to the PDF!</a>
      </object>

      <embed
        src="/static/semantic-versioning/SemanticVersioning.pdf"
        width="500"
        height="375"
        type="application/pdf"
      />

      <iframe src="/static/semantic-versioning/SemanticVersioning.pdf"></iframe>
    </>
  )
}
