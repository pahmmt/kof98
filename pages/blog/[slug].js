import { MDXRemote } from 'next-mdx-remote'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'
import OpenGraph from '@/components/OpenGraph'

export async function getStaticPaths() {
  const { getPaths } = await import('@/utils/blog')
  const paths = await getPaths()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  try {
    const { getPost } = await import('@/utils/blog')
    const postData = await getPost(params.slug)
    if (!postData || postData.length <= 0) {
      return {
        notFound: true,
      }
    }
    return {
      props: postData,
    }
  } catch (e) {
    console.error('Error fetching post:', e)
  }
}

export default function Page({ frontMatter, mdxSource, slug }) {
  return (
    frontMatter && (
      <>
        <NextHead title={frontMatter.title} description={frontMatter.description}>
          <OpenGraph
            url={`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/blog/${slug}`}
            title={frontMatter.title}
            description={frontMatter.description}
            image={frontMatter.cover}
          />
        </NextHead>
        <main className="mt-4 flex-1 space-y-8 px-4">
          <Card fullWidth className="mx-auto max-w-7xl">
            <CardHeader>
              <Breadcrumb data={[{ name: 'Blog', href: '/blog' }, { name: frontMatter.title }]} />
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="mb-8 mt-3 flex flex-col items-center">
                <h2 className="text-xl font-semibold">{frontMatter.title}</h2>
                <div className="text-sm text-slate-200/50">Published {frontMatter.date}</div>
              </div>
              <div className="prose prose-invert max-w-none md:px-4">
                <MDXRemote {...mdxSource} />
              </div>
            </CardBody>
          </Card>
        </main>
      </>
    )
  )
}
