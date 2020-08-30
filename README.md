# 🌱 Next + MDX Digital Garden Starter

An opinionated starting point for Digital Garden content authoring.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2FRyanWarner%2Fnext-mdx-digital-garden-starter)

## Getting started

```
npm install
npm run dev
```

## Goals

Statically generated pages from MDX files that are not tied to the filesystem path

## How it works

- `[slug].js` generates static paths using `getStaticPaths` from all `.mdx` files located in the specified directory (`content/` by default).
- The `getStaticProps` NextJS method passes the MDX content including front-matter (parsed with gray-matter) to the `<PostPage />` component to be rendered.
- The index or home page uses similar logic to generate a list of posts sorted by date.

## TODO

- [ ] Support filesystem-based routing as an option
- [ ] Add some batteries-included examples
- [ ] Write a tutorial
