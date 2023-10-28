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

const getFighterInfo = async (id) => {
  try {
    const data = await getData()
    return data.fighters.find((fighter) => fighter.id == id)
  } catch (error) {
    return handleError(error)
  }
}

const getFighterData = async (id) => {
  try {
    const fighter = await getYAML(`fighters/${id}.yml`)
    fighter.element_fates = await Promise.all(
      fighter.element_fates.map(async (fate_id) => await getFighterInfo(fate_id))
    )
    return fighter
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

export { getPaths, getData, getFighterData, getAidTable, getEightGatesTable }
