import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const postDir = 'data/posts'

export const postsPerPage = 10

const handleError = (error) => {
  console.error('Error:', error)
  return []
}

const getPaths = async () => {
  const files = fs.readdirSync(path.join(postDir))
  return files.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ''),
      },
    }
  })
}

const getPaginatePaths = async () => {
  const posts = await getPosts()
  const numPages = Math.ceil(posts.length / postsPerPage)

  return Array.from({ length: numPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))
}

const getPosts = async () => {
  try {
    let files = await fs.promises.readdir(path.join(postDir))
    files = files.filter((file) => file.split('.')[1] === 'mdx')

    const posts = await Promise.all(
      files.map(async (file) => {
        const mdWithData = await fs.promises.readFile(path.join(postDir, file), 'utf-8')
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
    const markdown = await fs.promises.readFile(path.join(postDir, `${slug}.mdx`), 'utf-8')
    const { data: frontMatter, content } = matter(markdown)
    const mdxSource = await serialize(content)

    return {
      frontMatter,
      mdxSource,
      slug,
    }
  } catch (error) {
    return handleError(error)
  }
}

export { getPaths, getPaginatePaths, getPosts, getPost }
