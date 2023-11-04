import { MDXRemote } from 'next-mdx-remote'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'

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
    console.error('Error fetching data:', e)
  }
}

export default function Page({ frontMatter, mdxSource, slug }) {
  return (
    frontMatter && (
      <>
        <NextHead
          title={frontMatter.title}
          description={frontMatter.description}
          openGraphData={{
            url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/blog/${slug}`,
            title: frontMatter.title,
            description: frontMatter.description,
            image: frontMatter.cover,
          }}
        />
        <main className="mt-4 flex-1 px-4">
          <div className="mx-auto mb-4 max-w-7xl">
            <Breadcrumb data={[{ name: 'Blog', href: '/blog' }, { name: frontMatter.title }]} />
          </div>
          <Card fullWidth className="mx-auto max-w-7xl">
            <CardBody>
              <div className="mb-6 mt-2 flex flex-col items-center sm:mb-8 sm:mt-3">
                <h2 className="text-center text-xl font-bold sm:text-2xl">{frontMatter.title}</h2>
                <div className="text-sm text-slate-200/50">Published {frontMatter.date}</div>
              </div>
              <div className="prose prose-invert mx-2 max-w-none sm:mx-4">
                <MDXRemote {...mdxSource} />
              </div>
            </CardBody>
          </Card>
        </main>
      </>
    )
  )
}
