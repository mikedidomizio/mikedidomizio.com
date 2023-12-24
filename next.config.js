const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: []
    }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below

    async redirects() {
        return [
            {
                source: '/',
                destination: '/blog',
                permanent: false,
            },
        ]
    },
}

module.exports = withMDX(nextConfig)
