/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from 'next/link'

export default function PostSnippet ({ slug, frontMatter }) {
  return (
    <>
      <Link href={slug}>
        <a
          sx={{ variant: "links.snippet" }}
        >
          {frontMatter.title}
        </a>
      </Link>
      <div
        sx={{
          mt: 2,
          variant: "text.date.snippet",
        }}
      >
        {frontMatter.date}
      </div>
    </>
  )
}