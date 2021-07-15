import fs from 'fs'
import matter from 'gray-matter'
import glob from 'fast-glob'

import * as components from 'components'
import { renderWithReact } from 'utils/renderWithReact'
import contentGlob from './contentGlob'

const getSinglePost = async (slug) => {
  const files = glob.sync(contentGlob)

  const fullPath = files.filter(item => {
    const split = item.split('/')
    const filename = split[split.length - 1]
    return filename.replace('.mdx', '').replace('.md', '') === slug
  })[0]

  const mdxSource = fs.readFileSync(fullPath)
  const { content, data } = matter(mdxSource)

  if (!fullPath) {
    console.warn('No MDX file found for slug')
  }

  const mdxHtml = await renderWithReact(content, { components })

  return {
    mdxHtml,
    frontmatter: data || {}
  }
}

export default getSinglePost