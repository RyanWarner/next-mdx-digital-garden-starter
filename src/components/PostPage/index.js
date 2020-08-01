import * as S from './styles'
import { SEO, Header } from 'components'

import { MDXProvider } from '@mdx-js/react'

import * as components from 'components'

// import { p as P } from 'components/MDXOverrideComponents'

// const components = {
//   p: props => <P {...props} />
// }

const PostPage = ({ mdxHtml, frontMatter, fullPath }) => {
  const Doc = require(`../../../${fullPath}`).default
  return (
    <>
      <S.Wrap>
        <SEO title={frontMatter.title} />
        <S.Main>
          <Header />
          <h1>{frontMatter.title}</h1>
          <MDXProvider components={components}>
            <Doc />
          </MDXProvider>
          {/* <div dangerouslySetInnerHTML={{ __html: mdxHtml }} /> */}
        </S.Main>
      </S.Wrap>
    </>
  )
}

export default PostPage