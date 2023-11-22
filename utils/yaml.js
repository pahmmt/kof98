import fs from 'fs'
import path from 'path'
import YAML from 'yaml'

const getYAML = async (filename) => {
  try {
    const data = await fs.promises.readFile(path.join('data', filename), 'utf-8')
    return await YAML.parse(data)
  } catch (error) {
    throw new Error(error)
  }
}

export { getYAML }
