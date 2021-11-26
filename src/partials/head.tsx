import NextHead from 'next/head'

// Props
interface HeaderProps {
    title: string,
    description: string
}

// Component
function Head ({title, description} : HeaderProps) {
    return (
        <NextHead>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <link rel="icon" href="/favicon.ico" />
        </NextHead>
    )
}

export default Head