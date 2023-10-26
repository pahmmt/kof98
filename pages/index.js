import { useEffect } from 'react'
import NextHead from '@/components/NextHead'
import ArticleSection from '@/components/ArticleSection'
import FighterSection from '@/components/FighterSection'
import SoulSection from '@/components/SoulSection'
import { useDataContext } from '@/components/DataContext'

export async function getStaticProps() {
  try {
    const { getData } = await import('@/utils/fighter')
    const data = await getData()
    const { getPosts } = await import('@/utils/blog')
    const posts = (await getPosts()).slice(0, 3)
    return {
      props: {
        data,
        posts,
      },
    }
  } catch (e) {
    console.error('Error fetching data:', error)
  }
  return {
    props: {},
  }
}

export default function Page({ data, posts }) {
  const { headerActive, setHeaderActive } = useDataContext()

  useEffect(() => {
    const scrollIntoView = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          })
          setHeaderActive(window.location.hash)
        }
      }
    }

    setTimeout(scrollIntoView, 100)
  }, [setHeaderActive])

  return (
    <>
      <NextHead
        title={process.env.NEXT_PUBLIC_APP_NAME || 'Untitled'}
        description="Cập nhật thông tin võ sĩ, tính năng về game KOF'98 UM OL máy chủ Quốc Tế."
      >
        <meta property="og:url" content="https://kof98um.online/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={process.env.NEXT_PUBLIC_APP_NAME || 'Untitled'} />
        <meta
          property="og:description"
          content="Cập nhật thông tin võ sĩ, tính năng về game KOF'98 UM OL máy chủ Quốc Tế."
        />
        <meta property="og:image" content="/assets/cover/og_img.jpg" />
      </NextHead>
      <main className="mt-4 flex-1 space-y-8 px-4">
        <ArticleSection
          posts={posts}
          className={headerActive == '#news' ? 'border border-secondary-500' : ''}
        />
        <FighterSection
          fighters={data.fighters}
          className={headerActive == '#fighters' ? 'border border-secondary-500' : ''}
        />
        <SoulSection
          souls={data.souls}
          className={headerActive == '#souls' ? 'border border-secondary-500' : ''}
        />
      </main>
    </>
  )
}
