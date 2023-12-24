import mideoMeInTheAppStore from '../2013-11-20-building-my-first-phonegap-ios-app-and-what-i-learned/mideome-in-the-app-store.png'
import Link from "next/link";

export default function Page() {
  return (
      <div className="min-h-screen flex flex-col">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">mikedidomizio.com</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/blog">Blog</Link></li>
              {/*<li><Link href="/about">About</Link></li>*/}
              {/*<li>*/}
              {/*  <details>*/}
              {/*    <summary>*/}
              {/*      Parent*/}
              {/*    </summary>*/}
              {/*    <ul className="p-2 bg-base-100 rounded-t-none">*/}
              {/*      <li><a>Link 1</a></li>*/}
              {/*      <li><a>Link 2</a></li>*/}
              {/*    </ul>*/}
              {/*  </details>*/}
              {/*</li>*/}
            </ul>
          </div>
        </div>
        <main className="flex flex-wrap px-4 md:px-6 lg:px-8 py-6 md:py-12 lg:py-16 space-y-6 md:space-y-12 lg:space-y-16 md:space-x-6 lg:space-x-16">
          <section className="w-full">
            <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/3 px-2">
                <Link href="./2013-11-20-building-my-first-phonegap-ios-app-and-what-i-learned">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={mideoMeInTheAppStore.src} alt="MideoMe in the app store" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Building my first Phonegap iOS app and what I learned
                        {/*<div className="badge badge-secondary">NEW</div>*/}
                      </h2>
                      <p>November 20th 2013</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">iOS</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
  )
}
