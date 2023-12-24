import Link from "next/link";

export const Navbar = () => {
    return <div className="navbar bg-base-100">
        <div className="flex-1">
            <h1><Link href="/" className="btn btn-ghost text-xl">mikedidomizio.com</Link></h1>
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
}
