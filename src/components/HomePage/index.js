import Link from 'next/link'

import { SEO } from 'components'
import * as S from './styles'

export default function HomePage ({ allMdx }) {
  return (
    <S.Wrap>
      <SEO />
      <S.Main>
        <h1>
          NextJS + MDX Digital Garden Starter
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
                <Link href={item.slug}>
                  <a>
                    {item.frontMatter.title}
                  </a>
                </Link>
                <p>{item.frontMatter.date}</p>
              </li>
            )
          })}
        </ul>
      </S.Main>
    </S.Wrap>
  )
}