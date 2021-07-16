import * as S from './styles'
import { SEO, Header } from 'components'

const PostPage = ({ frontmatter, mdxHtml }) => {
  return (
    <>
      <S.Wrap>
        <SEO title={frontmatter.title} />
        <Header />
        <S.Main>
          <S.H1>{frontmatter.title}</S.H1>
          <p>{frontmatter.description}</p>
          <div dangerouslySetInnerHTML={{ __html: mdxHtml }} />
        </S.Main>
      </S.Wrap>
    </>
  )
}

export default PostPage
