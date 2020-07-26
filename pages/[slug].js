
import fs from 'fs'
import MDX from '@mdx-js/runtime'
import ReactDOM from 'react-dom/server'
import path from 'path'
import matter from 'gray-matter'
const glob = require('glob-fs')({ gitignore: true })

import * as components from '../components'

const Post = ({ mdxHtml, frontMatter }) => {
  return (
    <>
      <h1>{frontMatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: mdxHtml }} />
    </>
  )
}

export async function getStaticPaths() {
  const files = glob.readdirSync('content/**/*.mdx')

  const paths = files
    .map(slug => {
      const split = slug.split('/')
      const filename = split[split.length - 1]
      return {
        params: {
          slug: filename.replace('.mdx', '')
        }
      }
    })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const files = glob.readdirSync('content/**/*.mdx')

  const fullPath = files.filter(item => {
    const split = item.split('/')
    const filename = split[split.length - 1]
    return filename.replace('.mdx', '') === slug
  })[0]

  const mdxSource = fs.readFileSync(path.join(fullPath))
  const { content, data } = matter(mdxSource)

  if (!fullPath) {
    console.warn('No MDX file found for slug')
  }

  return {
    props: {
      mdxHtml: ReactDOM.renderToStaticMarkup(
        <MDX components={components}>
          {content}
        </MDX>
      ),
      frontMatter: data || {}
    }
  }
}

export default Post