
import fs from 'fs'
import MDX from '@mdx-js/runtime'
import ReactDOM from 'react-dom/server'
import path from 'path'
const glob = require('glob-fs')({ gitignore: true })

const Post = ({ mdxHtml }) => {
  return <div dangerouslySetInnerHTML={{ __html: mdxHtml }} />
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
  };
}

export async function getStaticProps({ params: { slug } }) {
  const files = glob.readdirSync('content/**/*.mdx')

  const fullPath = files.filter(item => {
    const split = item.split('/')
    const filename = split[split.length - 1]
    return filename.replace('.mdx', '') === slug
  })[0]

  if (!fullPath) {
    console.warn('No MDX file found for slug')
  }

  return {
    props: {
      mdxHtml: ReactDOM.renderToStaticMarkup(
        <MDX>{fs.readFileSync(path.join(fullPath))}</MDX>
      )
    }
  }
}

export default Post