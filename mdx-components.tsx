import type { MDXComponents } from 'mdx/types'
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // todo DaisyUI classes aren't handled so will just temporarily put the Links in the MDX
        // a(props) {
        //     return <Link className="link link-primary" href={props.href as string}>{props.children}</Link>
        // },
        h2(props) {
            return <h2 className="text-4xl font-bold mb-4" {...props} />
        },
        h3(props) {
            return <h3 className="text-2xl font-bold mb-4" {...props} />
        },
        p(props) {
            return <p className="mb-4" {...props} />
        },
        ...components,
    }
}
