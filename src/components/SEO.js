import Head from 'next/head'

import siteConfig from 'site.config'

export default function SEO ({
  title,
  description,
  twitterHandle,
  favicon,
  ogImage,
  url,
  fonts
}) {
  const Fonts = () =>
    fonts.map(font => <link href={font.url} rel='preload' as='font' />)

  return (
    <Head>
      <title>{title}</title>

      <link rel='icon' href={favicon} />

      <Fonts />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={`${url}${ogImage}`} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta name='twitter:site' content={twitterHandle} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content={`${url}${ogImage}`} />
    </Head>
  )
}

SEO.defaultProps = {
  ...siteConfig
}
