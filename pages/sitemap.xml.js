function generateSiteMap(posts) {
  const curDate = new Date().toISOString().split('T')[0]
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${siteUrl}</loc>
       <lastmod>${curDate}</lastmod>
     </url>
     <url>
       <loc>${siteUrl}/features/card-book</loc>
       <lastmod>${curDate}</lastmod>
     </url>
     <url>
       <loc>${siteUrl}/features/runes</loc>
       <lastmod>${curDate}</lastmod>
     </url>
     <url>
       <loc>${siteUrl}/features/nests-gene-map</loc>
       <lastmod>${curDate}</lastmod>
     </url>
     <url>
       <loc>${siteUrl}/features/cosmic-power</loc>
       <lastmod>${curDate}</lastmod>
     </url>
     <url>
       <loc>${siteUrl}/features/nests-transform</loc>
       <lastmod>${curDate}</lastmod>
     </url>
     <url>
       <loc>${siteUrl}/resources/eight-gates</loc>
       <lastmod>${curDate}</lastmod>
     </url>
     <url>
       <loc>${siteUrl}/resources/eight-gates</loc>
       <lastmod>${curDate}</lastmod>
     </url>
     <url>
       <loc>${siteUrl}/resources/aid</loc>
       <lastmod>${curDate}</lastmod>
     </url>
     <url>
       <loc>${siteUrl}/resources/awaken-soul</loc>
       <lastmod>${curDate}</lastmod>
     </url>
     <url>
       <loc>${siteUrl}/resources/avatar</loc>
       <lastmod>${curDate}</lastmod>
     </url>
     <url>
       <loc>${siteUrl}/resources/combos</loc>
       <lastmod>${curDate}</lastmod>
     </url>
     <url>
       <loc>${siteUrl}/blog</loc>
       <lastmod>${curDate}</lastmod>
     </url>
     ${posts
       .map(({ frontMatter, slug }) => {
         return `
       <url>
           <loc>${siteUrl}/blog/${slug}</loc>
           <lastmod>${frontMatter.date}</lastmod>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

export async function getServerSideProps({ res }) {
  const { getPosts } = await import('@/utils/blog')
  const posts = await getPosts()
  const sitemap = generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default function Page() {}
