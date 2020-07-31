# 🌱 Next + MDX Digital Garden Starter

An opinionated starting point for Digital Garden content authoring.

## Getting started

```
npm install
npm run dev
```

## Goals

Statically generated pages from MDX files that are not tied to the filesystem path

## How it works

- The `[slug].js` file generates static paths using `getStaticPaths` from all `.mdx` files located in the `content/` directory.
- The `getStaticProps` NextJS lifecycle method passes the MDX content including front-matter parsed with gray-matter to the `<Post />` component.

## TODO

- [ ] Support filesystem-based routing as an option
- [ ] Add headless CMS example
- [ ] Add styling
- [ ] Linting
- [ ] Add Hygen component scaffolding