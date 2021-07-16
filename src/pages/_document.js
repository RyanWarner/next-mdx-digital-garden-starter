import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import glob from 'fast-glob'

import * as components from 'components'
import contentGlob from 'utils/contentGlob'

/**
 * We have to include all of our MDX documents in the
 * collectStyles call for Styled Components to work properly.
 *
 * This could potentially create performance issues on large
 * sites with lots of bespoke components. Is there a better way?
 */
 export const getAllMdx = slug => {
  const files = glob.sync(contentGlob)
  const mdxDocs = []

  files.forEach(file => {
    mdxDocs.push(require(`../../${file}`).default)
  })

  return () => (
    <MDXProvider components={components}>
      {mdxDocs.map(MdxDoc => <MdxDoc />)}
    </MDXProvider>
  )
}

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    const MDX = getAllMdx()

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
