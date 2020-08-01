import { MDXProvider } from '@mdx-js/react'

import * as S from './styles'
import { SEO, Header } from 'components'
import * as components from 'components'

const PostPage = ({ frontMatter, fullPath }) => {
  // TODO: dynamic path
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
        </S.Main>
      </S.Wrap>
    </>
  )
}

export default PostPage