import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'
import BlogPageList from '@/components/BlogPageList'
import OpenGraph from '@/components/OpenGraph'

export async function getStaticProps() {
  try {
    const { getPosts, postsPerPage } = await import('@/utils/blog')
    const posts = await getPosts()
    const paginatedPosts = posts.slice(0, postsPerPage)
    const numPages = Math.ceil(posts.length / postsPerPage)

    return {
      props: {
        paginatedPosts,
        numPages,
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
      <NextHead title="Blog" description="Tổng hợp các bài viết liên quan đến game KOF'98 UM OL.">
        <OpenGraph
          url={`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/blog`}
          title="Blog"
          description="Tổng hợp các bài viết liên quan đến game KOF'98 UM OL."
        />
      </NextHead>
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <Breadcrumb data={[{ name: 'Blog' }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <BlogPageList paginatedPosts={paginatedPosts} numPages={numPages} />
          </CardBody>
        </Card>
      </main>
    </>
  )
}
