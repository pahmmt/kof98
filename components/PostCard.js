/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link'
import { Link } from '@nextui-org/react'

export default function PostCard({ posts }) {
  return (
    <ul className="-my-2 divide-y divide-slate-400/25">
      {posts.map((post, index) => (
        <li key={index} className="flex items-center gap-3 text-sm md:gap-5">
          <Link as={NextLink} href={`/blog/${post.slug}`}>
            <img
              src={post.frontMatter.cover}
              alt="Thumbnail"
              className="my-2 block h-12 w-24 rounded-md sm:h-14 sm:w-28 md:h-16 md:w-32"
            />
          </Link>
          <div className="min-w-0 flex-1 space-y-1">
            <Link
              as={NextLink}
              href={`/blog/${post.slug}`}
              color="foreground"
              className="block truncate font-medium"
            >
              {post.frontMatter.title}
            </Link>
            <div className="truncate text-sm opacity-80">{post.frontMatter.description}</div>
          </div>
          <div className="hidden sm:block">{post.frontMatter.date}</div>
        </li>
      ))}
    </ul>
  )
}
