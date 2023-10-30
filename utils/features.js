import { getYAML } from './yaml'

const handleError = (error) => {
  console.error('Error:', error)
  return []
}

export const getRunes = async () => {
  try {
    return await getYAML('runes.yml')
  } catch (error) {
    return handleError(error)
  }
}

export const fateFiles = async () => {
  try {
    const data = await getYAML('fate-files.yml')
    const { getFighterInfoByName } = await import('./fighter')
    const fate_files = await Promise.all(
      data.map(async (info) => {
        info.fates = await Promise.all(
          info.fates.map(async (name) => await getFighterInfoByName(name))
        )
        return info
      })
    )
    return fate_files
  } catch (error) {
    return handleError(error)
  }
}
