import Link from 'next/link'

import * as S from './styles'

export default function PostSnippet ({ slug, frontmatter }) {
  const href = `/${slug}`

  return (
    <>
      <Link href={href} passHref>
        <a
          style={{
            fontSize: '25px',
            textDecoration: 'none',
            color: 'black'
          }}
        >
          {frontmatter.title}
        </a>
      </Link>
      <S.Description>{frontmatter.description}</S.Description>
    </>
  )
}
