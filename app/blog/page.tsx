import {Navbar} from "@/app/components/Navbar";
import {Content} from "@/app/components/Content";
import {BlogPostCard} from "@/app/components/BlogPostCard";

import { metadata as sharedDatabaseMetadata } from './2013-12-08-the-screams-of-a-shared-hosting-database-dying/metadata'
import { metadata as mideoMeIOS } from './2013-11-20-building-my-first-phonegap-ios-app-and-what-i-learned/metadata'

export default function Page() {
  return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Content>
          <h2 className="text-4xl font-bold mb-4">Blog Posts</h2>
          <div className="grid gap-4 lg:grid-cols-3">
              <BlogPostCard date={sharedDatabaseMetadata.date}
                            link={sharedDatabaseMetadata.url}
                            image={sharedDatabaseMetadata.picture}
                            title={sharedDatabaseMetadata.title} tags={sharedDatabaseMetadata.tags} />

              <BlogPostCard date={mideoMeIOS.date}
                          link={mideoMeIOS.url}
                          image={mideoMeIOS.picture}
                          title={mideoMeIOS.title} tags={mideoMeIOS.tags} />

          </div>
        </Content>
      </div>
  )
}
