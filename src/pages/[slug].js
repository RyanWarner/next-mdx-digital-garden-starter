import * as components from 'components'
import getSinglePost from 'utils/getSinglePost'
import getPathsForContent from 'utils/getPathsForContent'

export async function getStaticPaths() {
  const paths = getPathsForContent()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const { mdxHtml, frontmatter } = await getSinglePost(slug)

  return {
    props: {
      mdxHtml,
      frontmatter
    }
  }
}

export default components.PostPage
