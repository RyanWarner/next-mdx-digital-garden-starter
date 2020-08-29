import fs from 'fs'
import MDX from '@mdx-js/runtime'
import ReactDOM from 'react-dom/server'
import matter from 'gray-matter'
import glob from 'fast-glob'

import * as components from 'components'

// This glob is what will be used to generate static routes
const contentGlob = 'src/content/**/*.mdx'

export async function getStaticPaths () {
  const files = glob.sync(contentGlob)

  const paths = files.map(file => {
    const split = file.split('/')
    const filename = split[split.length - 1]
    const slug = filename.replace('.mdx', '')

    return {
      params: {
        slug
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params: { slug } }) {
  const files = glob.sync(contentGlob)

  const fullPath = files.filter(item => {
    const split = item.split('/')
    const filename = split[split.length - 1]
    return filename.replace('.mdx', '') === slug
  })[0]

  const mdxSource = fs.readFileSync(fullPath)
  const { content, data } = matter(mdxSource)

  if (!fullPath) {
    console.warn('No MDX file found for slug')
  }

  return {
    props: {
      mdxHtml: ReactDOM.renderToStaticMarkup(
        <MDX components={components}>{content}</MDX>
      ),
      frontMatter: data || {}
    }
  }
}

export default components.PostPage
