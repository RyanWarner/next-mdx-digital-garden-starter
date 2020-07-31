import Head from 'next/head'

const siteMetadata = {
  title: 'NextJS MDX Digital Garden Starter',
  description: 'An opinionated starting point for authoring interactive content using MDX and NextJS',
  twitterHandle: '@RyanWarnerCodes',
  favicon: '/favicon.png',
  ogImage: '/ogImage.png'
}

export default function SEO({
  title,
  description,
  ogImage,
  twitterHandle,
  favicon
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />
      <meta name='twitter:site' content={twitterHandle} />
      <meta name='twitter:card' content='summary_large_image' />
      <link rel='icon' href={favicon} />
      <meta name='twitter:image' content={ogImage} />
      <link href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap' rel='stylesheet' />
    </Head>
  )
}

SEO.defaultProps = {
  ...siteMetadata
}
