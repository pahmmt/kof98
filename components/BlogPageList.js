import { useRouter } from 'next/router'
import { Pagination } from '@nextui-org/react'

import PostCard from '@/components/PostCard'

export default function BlogPageList({ paginatedPosts, numPages, currentPage = 1 }) {
  const router = useRouter()

  const handlePagination = (page) => {
    router.push(`/blog/page/${page}`)
  }

  return (
    <>
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
    </>
  )
}
