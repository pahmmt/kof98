import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'
import BlogPageList from '@/components/BlogPageList'

export async function getStaticPaths() {
  const { getPaginatePaths } = await import('@/utils/blog')
  const paths = getPaginatePaths()
  return paths
}

export async function getStaticProps({ params }) {
  try {
    const { getPosts, postsPerPage } = await import('@/utils/blog')
    const posts = await getPosts()
    const page = parseInt(params.page, 10) || 1
    const start = (page - 1) * postsPerPage
    const end = page * postsPerPage
    const paginatedPosts = posts.slice(start, end)
    const numPages = Math.ceil(posts.length / postsPerPage)

    return {
      props: {
        paginatedPosts,
        numPages,
        currentPage: page,
      },
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
    return {
      props: {
        paginatedPosts: [],
      },
    }
  }
}

export default function Page({ paginatedPosts, numPages, currentPage }) {
  return (
    <>
      <NextHead title="Blog" />
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <Breadcrumb data={[{ name: 'Blog' }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <BlogPageList
              paginatedPosts={paginatedPosts}
              numPages={numPages}
              currentPage={currentPage}
            />
          </CardBody>
        </Card>
      </main>
    </>
  )
}
