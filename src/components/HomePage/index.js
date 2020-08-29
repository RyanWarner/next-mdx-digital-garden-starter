import { SEO, PostSnippet, GitHub, Header } from 'components'
import * as S from './styles'

const githubUrl =
  'https://github.com/RyanWarner/next-mdx-digital-garden-starter'

export default function HomePage ({ allMdx }) {
  return (
    <S.Wrap>
      <SEO />
      <Header />
      <S.Main>
        <S.H1>
          NextJS + MDX
          <br />
          Digital Garden Starter
        </S.H1>

        <S.FeatureList>
          <S.ListItem>
            Create top level routes from .mdx files organized however you want.
          </S.ListItem>
          <S.ListItem>
            Statically generated routes using Next’s `getStaticPaths`.
          </S.ListItem>
          <S.ListItem>Supports frontmatter (thanks to gray-matter).</S.ListItem>
        </S.FeatureList>

        <S.GitHubButton href={githubUrl}>
          <GitHub />
          <span>View source on GitHub</span>
        </S.GitHubButton>

        <S.H2>Featured posts</S.H2>
        <S.PostList>
          {allMdx.map(item => (
            <S.PostListItem key={item.slug}>
              <PostSnippet {...item} />
            </S.PostListItem>
          ))}
        </S.PostList>
      </S.Main>
      <S.StyledFooter />
    </S.Wrap>
  )
}
