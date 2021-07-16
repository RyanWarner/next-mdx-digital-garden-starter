import Head from 'next/head'

import siteConfig from 'site.config'

export default function SEO ({
  title,
  description,
  twitterHandle,
  favicon,
  ogImage,
  url
}) {
  return (
    <Head>
      <title>{title}</title>

      <link rel='icon' href={favicon} />

      <link
        href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'
        rel='stylesheet'
      />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={`${url}${ogImage}`} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta name='twitter:site' content={twitterHandle} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content={`${url}${ogImage}`} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>
  )
}

SEO.defaultProps = {
  ...siteConfig
}
