import fs from 'fs'
import path from 'path'
import { getYAML } from './yaml'

const handleError = (error) => {
  console.error('Error:', error)
  return []
}

const getPaths = async () => {
  const files = fs.readdirSync(path.join('data/yaml/souls'))
  const ymlFiles = files.filter((fileName) => fileName.endsWith('.yml'))

  return ymlFiles.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.yml$/, ''),
      },
    }
  })
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
