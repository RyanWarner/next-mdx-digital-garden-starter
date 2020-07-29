import Link from 'next/link'

import * as S from './styles'

export default function PostSnippet ({ slug, frontMatter }) {
  return (
    <>
      <Link href={item.slug}>
        <a>
          {item.frontMatter.title}
        </a>
      </Link>
      <p>{item.frontMatter.date}</p>
    </>
  )
}