/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from 'next/link'

import { SEO, PostSnippet, GitHub } from 'components'
import * as S from './styles'

const githubUrl = 'https://github.com/RyanWarner/next-mdx-digital-garden-starter'

export default function HomePage ({ allMdx }) {
  return (
    <S.Wrap>
      <SEO />
      <S.Main>
        <S.Seedling>🌱</S.Seedling>
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
          <S.ListItem>
            Supports frontmatter (thanks to gray-matter).
          </S.ListItem>
        </S.FeatureList>

        <S.GitHubButton href={githubUrl}>
          <GitHub />
          <span>View source on GitHub</span>
        </S.GitHubButton>

        <S.H2>
          Example posts
        </S.H2>
        <S.PostList>
          {allMdx.map(item => (
            <S.PostListItem key={item.slug}>
              <PostSnippet {...item} />
            </S.PostListItem>
          ))}
        </S.PostList>

      <p sx={{ backgroundColor: "primary", color: "#fff", p: 4 }}>
        🍅 Theme UI works if this box is rendered in tomato background.
      </p>
      </S.Main>
    </S.Wrap>
  )
}