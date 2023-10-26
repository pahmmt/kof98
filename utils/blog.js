import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const postDir = 'data/posts'

const handleError = (error) => {
  console.error('Error:', error)
  return []
}

const getPosts = async () => {
  try {
    let files = await fs.promises.readdir(path.resolve(process.cwd(), postDir))
    files = files.filter((file) => file.split('.')[1] === 'mdx')

    const posts = await Promise.all(
      files.map(async (file) => {
        const mdWithData = await fs.promises.readFile(
          path.resolve(process.cwd(), postDir, file),
          'utf-8'
        )
        const { data: frontMatter } = matter(mdWithData)

        return {
          frontMatter,
          slug: file.split('.')[0],
        }
      })
    )

    return posts
  } catch (error) {
    return handleError(error)
  }
}

const getPost = async (slug) => {
  try {
    const markdown = await fs.promises.readFile(
      path.resolve(process.cwd(), postDir, `${slug}.mdx`),
      'utf-8'
    )
    const { data: frontMatter, content } = matter(markdown)
    const mdxSource = await serialize(content)

    return {
      frontMatter,
      mdxSource,
    }
  } catch (error) {
    return handleError(error)
  }
}

export { getPosts, getPost }
