import fs from 'fs'
import path from 'path'
import { getYAML } from './yaml'

const handleError = (error) => {
  console.error('Error:', error)
  return []
}

const getPaths = async () => {
  const files = fs.readdirSync(path.join('data/yaml/fighters'))
  const ymlFiles = files.filter((fileName) => fileName.endsWith('.yml'))

  return ymlFiles.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.yml$/, ''),
      },
    }
  })
}

const getFighterInfoById = async (id) => {
  try {
    const { getHomeData } = await import('./home')
    const data = await getHomeData()
    return data.fighters.find((fighter) => fighter.id == id)
  } catch (error) {
    return handleError(error)
  }
}

const getFighterInfoByName = async (name) => {
  try {
    const { getHomeData } = await import('./home')
    const data = await getHomeData()
    return data.fighters.find((fighter) => fighter.name == name)
  } catch (error) {
    return handleError(error)
  }
}

const getFighterData = async (id) => {
  try {
    const fighter = await getYAML(`fighters/${id}.yml`)
    const element_fates = await Promise.all(
      fighter.element_fates.map(async (name) => await getFighterInfoByName(name))
    )
    fighter.element_fates = element_fates.flat()
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

export {
  getPaths,
  getFighterData,
  getAidTable,
  getEightGatesTable,
  getFighterInfoById,
  getFighterInfoByName,
}
