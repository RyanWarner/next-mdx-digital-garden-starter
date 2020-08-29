import fs from 'fs'
import matter from 'gray-matter'
import glob from 'fast-glob'

import { HomePage } from 'components'

export default HomePage

export async function getStaticProps () {
  const files = glob.sync('src/content/**/*.mdx')

  const allMdx = files.map(file => {
    const split = file.split('/')
    const filename = split[split.length - 1]
    const slug = filename.replace('.mdx', '')

    const mdxSource = fs.readFileSync(file)
    const { data } = matter(mdxSource)

    return {
      slug,
      frontMatter: data
    }
  })

  const orderedByDate = allMdx.sort((a, b) => {
    return new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
  })

  return {
    props: {
      allMdx: orderedByDate
    }
  }
}
