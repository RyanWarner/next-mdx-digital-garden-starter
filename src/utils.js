import glob from 'fast-glob'

const contentGlob = 'src/content/**/*.mdx'

export const getSlugForFilePath = path => {
  const split = path.split('/')
  const filename = split[split.length - 1]
  const slug = filename.replace('.mdx', '')
  return slug
}

export const getContent = () => {
  const files = glob.sync(contentGlob)

  return files.map(item => ({
    filepath: item,
    slug: getSlugForFilePath(item)
  }))
}

const content = getContent()

export const getFilePathForSlug = slug => {
  return content.filter(item => item.slug === slug)[0].filepath
}
