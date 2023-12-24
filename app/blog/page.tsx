import mideoMeInTheAppStore from './2013-11-20-building-my-first-phonegap-ios-app-and-what-i-learned/mideome-in-the-app-store.png'
import mideoMeDiscover from './2013-11-20-building-my-first-phonegap-ios-app-and-what-i-learned/mideome-discover-new-people.jpeg'
import Link from "next/link";
import {Navbar} from "@/app/components/Navbar";
import {Content} from "@/app/components/Content";

export default function Page() {
  return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Content>
          <h2 className="text-4xl font-bold mb-4">Blog Posts</h2>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 px-2">
              <Link href="/blog/2013-11-20-building-my-first-phonegap-ios-app-and-what-i-learned">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure><img className="h-[300px]" src={mideoMeDiscover.src} alt="MideoMe in the app store" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Building my first Phonegap iOS app and what I learned
                      {/*<div className="badge badge-secondary">NEW</div>*/}
                    </h2>
                    <p>November 20th 2013</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">iOS</div>
                      <div className="badge badge-outline">iPhone</div>
                      <div className="badge badge-outline">OSX</div>
                      <div className="badge badge-outline">CodeIgniter</div>
                      <div className="badge badge-outline">MideoMe</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Content>
      </div>
  )
}
