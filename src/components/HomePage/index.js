import Link from 'next/link'

import { SEO, PostSnippet } from 'components'
import * as S from './styles'

export default function HomePage ({ allMdx }) {
  return (
    <S.Wrap>
      <SEO />
      <S.Main>
        <h1>
          NextJS + MDX
          <br />Digital Garden Starter
        </h1>

        <ul>
          <li>
            Create top level routes from .mdx files organized however you want.
          </li>
          <li>
            Statically generated routes using Next’s `getStaticPaths`.
          </li>
          <li>
            Supports frontmatter (thanks to gray-matter).
          </li>
        </ul>

        <S.H2>
          Example posts
        </S.H2>
        <ul>
          {allMdx.map(item => {
            return (
              <li key={item.slug}>
                <PostSnippet {...item} />
              </li>
            )
          })}
        </ul>
      </S.Main>
    </S.Wrap>
  )
}