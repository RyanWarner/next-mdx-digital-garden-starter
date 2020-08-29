import Link from 'next/link'

import * as S from './styles'

export default function PostSnippet ({ slug, frontMatter }) {
  return (
    <>
      <Link href='/[slug]' as={slug} passHref>
        <a
          style={{
            fontSize: '25px',
            textDecoration: 'none',
            color: 'black'
          }}
        >
          {frontMatter.title}
        </a>
      </Link>
      <S.Description>{frontMatter.description}</S.Description>
    </>
  )
}
