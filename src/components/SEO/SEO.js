import Head from 'next/head'

const siteMetadata = {
  title: 'NextJS MDX Digital Garden Starter',
  description: 'An opinionated starting point for authoring interactive content using MDX and NextJS',
  twitterHandle: '@RyanWarnerCodes'
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
      <meta property='og:title' content={title || 'hello'} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />
      <meta name='twitter:site' content={twitterHandle} />
      <meta name='twitter:card' content='summary_large_image' />
      <link rel='icon' href={favicon} />
      <meta name='twitter:image' content={ogImage} />
    </Head>
  )
}

SEO.defaultProps = {
  title: 'Test',
  ...siteMetadata
}
