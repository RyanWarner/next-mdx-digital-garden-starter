import glob from 'fast-glob'

import contentGlob from './contentGlob'

const getSinglePost = () => {
  const files = glob.sync(contentGlob)

  const paths = files.map(file => {
    const split = file.split('/')
    const filename = split[split.length - 1]
    const slug = filename.replace('.mdx', '').replace('.md', '')

    return {
      params: {
        slug
      }
    }
  })

  return paths
}

export default getSinglePost