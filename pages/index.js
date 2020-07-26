import Head from 'next/head'
import Link from 'next/link'

import fs from 'fs'
import matter from 'gray-matter'
import glob from 'fast-glob'

export default function Home({ allMdx }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          NextJS + MDX Digital Garden Starter
        </h1>

        <ul>
          {allMdx.map(item => {
            return (
              <li key={item.slug}>
                <Link href={item.slug}>
                  <a>{item.frontMatter.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const files = glob.sync('content/**/*.mdx')

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

  return {
    props: {
      allMdx
    }
  }
}