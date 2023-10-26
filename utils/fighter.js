import fs from 'fs'
import path from 'path'
import { getYAML } from './yaml'

const handleError = (error) => {
  console.error('Error:', error)
  return []
}

const getPaths = async () => {
  const fileNames = fs.readdirSync(path.join('data/yaml/fighters'))

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.yml$/, ''),
      },
    }
  })
}

const getData = async () => {
  try {
    return await getYAML('home.yml')
  } catch (error) {
    return handleError(error)
  }
}

const getFighter = async (id) => {
  try {
    return await getYAML(`fighters/${id}.yml`)
  } catch (error) {
    return handleError(error)
  }
}

const getEightGatesTable = async () => {
  try {
    return await getYAML('gates.yml')
  } catch (error) {
    return handleError(error)
  }
}

const getAidTable = async () => {
  try {
    return await getYAML('aid.yml')
  } catch (error) {
    return handleError(error)
  }
}

export { getPaths, getData, getFighter, getAidTable, getEightGatesTable }
