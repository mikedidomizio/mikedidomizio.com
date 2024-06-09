import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <>
      embed drive
      <embed
        src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://mikedidomizio-com-dev-mode.vercel.app/static/semantic-versioning/SemanticVersioning.pdf"
        width="500"
        height="375"
      />
      embed no-drive
      <embed
        src="https://mikedidomizio-com-dev-mode.vercel.app/static/semantic-versioning/SemanticVersioning.pdf"
        width="500"
        height="375"
      />
    </>
  )
}
