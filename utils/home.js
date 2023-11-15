import { getYAML } from './yaml'

const handleError = (error) => {
  console.error('Error:', error)
  return []
}

const getHomeData = async () => {
  try {
    const data = await getYAML('home.yml')
    const fighters = data.fighters.sort((a, b) => {
      const dateA = a.date || 19700101
      const dateB = b.date || 19700101
      return dateB - dateA || b.id - a.id
    })
    const souls = data.souls.sort((a, b) => b.id - a.id)

    return {
      fighters,
      souls,
    }
  } catch (error) {
    return handleError(error)
  }
}

export { getHomeData }
