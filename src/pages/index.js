import fs from 'fs'
import matter from 'gray-matter'
import glob from 'fast-glob'

import { HomePage } from 'components'
import contentGlob from 'utils/contentGlob'

export default HomePage

export async function getStaticProps () {
  const files = glob.sync(contentGlob)

  const allMdx = files.map(file => {
    const split = file.split('/')
    const filename = split[split.length - 1]
    const slug = filename.replace('.mdx', '').replace('.md', '')

    const mdxSource = fs.readFileSync(file)
    const { data } = matter(mdxSource)

    return {
      slug,
      frontmatter: data
    }
  })

  const orderedByDate = allMdx.sort((a, b) => {
    return new Date(b.frontmatter.timestamp) - new Date(a.frontmatter.timestamp)
  })

  return {
    props: {
      allMdx: orderedByDate
    }
  }
}
