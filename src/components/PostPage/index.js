import * as S from './styles'
import { SEO, Header } from 'components'

const PostPage = ({ frontmatter, mdxHtml }) => {
  return (
    <>
      <S.Wrap>
        <SEO title={frontmatter.title} />
        <Header />
        <S.Main>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: mdxHtml }} />
        </S.Main>
      </S.Wrap>
    </>
  )
}

export default PostPage
