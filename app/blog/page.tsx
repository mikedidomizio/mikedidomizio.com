import {Navbar} from "@/components/Navbar";
import {Content} from "@/components/Content";
import {BlogPostCard} from "@/components/BlogPostCard";

import { metadata as sharedDatabaseMetadata } from './2013-12-08-the-screams-of-a-shared-hosting-database-dying/metadata'
import { metadata as mideoMeIOS } from './2013-11-20-building-my-first-phonegap-ios-app-and-what-i-learned/metadata'
import { metadata as shopifyApi } from './2013-12-16-shopify-javascript-api/metadata'

export default function Page() {
  return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Content>
          <h2 className="text-4xl font-bold mb-4">Blog Posts</h2>
          <div className="grid gap-4 lg:grid-cols-3">
              <BlogPostCard {...shopifyApi} />
              <BlogPostCard {...sharedDatabaseMetadata} />
              <BlogPostCard {...mideoMeIOS} />
          </div>
        </Content>
      </div>
  )
}
