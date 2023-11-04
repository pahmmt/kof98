import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'
import BlogPageList from '@/components/BlogPageList'

export async function getStaticPaths() {
  const { getPaginatePaths } = await import('@/utils/blog')
  const paths = await getPaginatePaths()

  return {
    paths,
    fallback: false,
  }
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
  } catch (e) {
    console.error('Error fetching data:', e)
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
      <NextHead
        title={`Blog - Trang ${currentPage}`}
        description={`Trang ${currentPage} - Tổng hợp các bài viết liên quan đến game KOF'98 UM OL.`}
        openGraphData={{
          url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/blog/${currentPage}`,
          title: `Blog - Trang ${currentPage}`,
          description: `Trang ${currentPage} - Tổng hợp các bài viết liên quan đến game KOF'98 UM OL.`,
        }}
      />
      <main className="mt-4 flex-1 px-4">
        <div className="mx-auto mb-4 max-w-7xl">
          <Breadcrumb data={[{ name: 'Blog' }]} />
        </div>
        <Card fullWidth className="mx-auto max-w-7xl">
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
