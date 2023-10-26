import { getYAML } from './yaml'

const handleError = (error) => {
  console.error('Error:', error)
  return []
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

export { getSoul, getSoulTable }
