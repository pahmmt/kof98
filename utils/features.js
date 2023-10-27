import { getYAML } from './yaml'

export const getRunes = async () => {
  try {
    return await getYAML('runes.yml')
  } catch (error) {
    return handleError(error)
  }
}
