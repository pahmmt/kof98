/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link'
import { Card, CardBody, CardHeader, Divider, Link } from '@nextui-org/react'
import PostCard from './PostCard'
import bgHead from '@/public/assets/custom/bg_head1.png'

export default function ArticleSection({ data, className = '' }) {
  return (
    <Card fullWidth className={`mx-auto max-w-7xl ${className}`} id="news">
      <CardHeader
        className="h-14 justify-between bg-right-bottom bg-no-repeat sm:h-16"
        style={{ backgroundImage: `url(${bgHead.src})` }}
      >
        <h2 className="text-stroke font-semibold drop-shadow">Bài viết mới</h2>
        <Link as={NextLink} href="/blog" color="foreground" className="text-stroke drop-shadow">
          Xem tất cả
        </Link>
      </CardHeader>
      <Divider />
      <CardBody>
        <PostCard posts={data} />
      </CardBody>
    </Card>
  )
}
