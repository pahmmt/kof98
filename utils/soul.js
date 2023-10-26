import fs from 'fs'
import path from 'path'
import YAML from 'yaml'

const handleError = (error) => {
  console.error('Error:', error)
  return []
}

const getSoul = async (id) => {
  try {
    const data = await fs.promises.readFile(path.join('data/yaml/souls', `${id}.yml`), 'utf-8')
    return await YAML.parse(data)
  } catch (error) {
    return handleError(error)
  }
}

const getSoulTable = async () => {
  try {
    const data = await fs.promises.readFile(path.join('data/yaml', 'awaken-soul.yml'), 'utf-8')
    return await YAML.parse(data)
  } catch (error) {
    return handleError(error)
  }
}

export { getSoul, getSoulTable }
