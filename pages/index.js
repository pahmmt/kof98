import { useEffect } from 'react'
import NextHead from '@/components/NextHead'
import NewsSection from '@/components/NewsSection'
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
    console.error('Error fetching data:', e)
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
      />
      <main className="mt-4 flex-1 space-y-4 px-4 sm:space-y-8">
        <NewsSection
          data={posts}
          className={headerActive == '#news' ? 'border border-secondary-500' : ''}
        />
        <FighterSection
          data={data.fighters.reverse()}
          className={headerActive == '#fighters' ? 'border border-secondary-500' : ''}
        />
        <SoulSection
          data={data.souls.reverse()}
          className={headerActive == '#souls' ? 'border border-secondary-500' : ''}
        />
      </main>
    </>
  )
}
