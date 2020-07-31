import * as S from './styles'
import { SEO, Header } from 'components'

const PostPage = ({ mdxHtml, frontMatter }) => {
  return (
    <>
      <S.Wrap>
        <SEO title={frontMatter.title} />
        <S.Main>
          <Header />
          <h1>{frontMatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: mdxHtml }} />
        </S.Main>
      </S.Wrap>
    </>
  )
}

export default PostPage