import fs from 'fs'
import path from 'path'
import { getYAML } from './yaml'

const handleError = (error) => {
  console.error('Error:', error)
  return []
}

const getPaths = () => {
  const files = fs.readdirSync(path.join('data/yaml/souls'))
  const paths = files.map((file) => {
    return {
      params: {
        id: file.replace('.yml', ''),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

const getSoul = async (id) => {
  try {
    return await getYAML(`souls/${id}.yml`)
  } catch (error) {
    return handleError(error)
  }
}

const getSoulTable = async () => {
  try {
    return await getYAML('awaken-soul.yml')
  } catch (error) {
    return handleError(error)
  }
}

export { getPaths, getSoul, getSoulTable }
