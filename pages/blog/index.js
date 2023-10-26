/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { Card, CardBody, CardHeader, Divider, Link, Pagination } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'
import PostCard from '@/components/PostCard'

export async function getServerSideProps(context) {
  try {
    const { getPosts } = await import('@/utils/blog')
    const posts = await getPosts()
    const postsPerPage = 10
    const page = parseInt(context.query.page, 10) || 1
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

export default function Page({ paginatedPosts, currentPage, numPages }) {
  const router = useRouter()

  const handlePagination = (page) => {
    router.push(`?page=${page}`)
  }

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
            {paginatedPosts.length > 0 ? (
              <>
                <PostCard posts={paginatedPosts} />
                {numPages > 1 && (
                  <div className="my-4 flex justify-center">
                    <Pagination
                      showControls
                      total={numPages}
                      page={currentPage}
                      onChange={handlePagination}
                    />
                  </div>
                )}
              </>
            ) : (
              <div>Chưa có bài viết!</div>
            )}
          </CardBody>
        </Card>
      </main>
    </>
  )
}
