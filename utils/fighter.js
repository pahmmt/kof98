import fs from 'fs'
import path from 'path'
import YAML from 'yaml'

const handleError = (error) => {
  console.error('Error:', error)
  return []
}

const getData = async () => {
  try {
    const data = await fs.promises.readFile(path.join('data/yaml', 'home.yml'), 'utf-8')
    return await YAML.parse(data)
  } catch (error) {
    return handleError(error)
  }
}

const getFighter = async (id) => {
  try {
    const data = await fs.promises.readFile(path.join('data/yaml/fighters', `${id}.yml`), 'utf-8')
    return await YAML.parse(data)
  } catch (error) {
    return handleError(error)
  }
}

const getEightGatesTable = async () => {
  try {
    const data = await fs.promises.readFile(path.join('data/yaml', 'gates.yml'), 'utf-8')
    return await YAML.parse(data)
  } catch (error) {
    return handleError(error)
  }
}

const getAidTable = async () => {
  try {
    const data = await fs.promises.readFile(path.join('data/yaml', 'aid.yml'), 'utf-8')
    return await YAML.parse(data)
  } catch (error) {
    return handleError(error)
  }
}

export { getData, getFighter, getAidTable, getEightGatesTable }
