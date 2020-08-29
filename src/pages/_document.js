import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'

import * as components from 'components'
import { getFilePathForSlug } from 'utils'

// If a slug exists, return a component to be included in the collectStyles call.
// Without this, MDX styles will not work.
export const requireMdxDocForSlug = slug => {
  if (!slug) return null

  const path = getFilePathForSlug(slug)
  const Doc = require(`../../${path}`).default

  return () => (
    <MDXProvider components={components}>
      <Doc />
    </MDXProvider>
  )
}

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    const MDX = requireMdxDocForSlug(ctx.query?.slug)

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(
              <>
                <App {...props} />
                {MDX && <MDX />}
              </>
            )
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}
