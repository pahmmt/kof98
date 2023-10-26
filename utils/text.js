export const highlightText = (text) => {
  const parts = text.split(/([#*].*?[#*])/g).map((part, index) => {
    if (part.startsWith('#') && part.endsWith('#')) {
      const innerText = part.slice(1, -1)
      return (
        <span className="text-yellow-500" key={index}>
          {innerText}
        </span>
      )
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      const innerText = part.slice(1, -1)
      return (
        <span className="font-semibold" key={index}>
          {innerText}
        </span>
      )
    }
    return part
  })
  return <>{parts}</>
}

export const formatUrl = (input) => {
  const pattern = /^((http|https):\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\:[0-9]{1,5})?(\/\S*)?$/
  if (!pattern.test(input)) {
    input = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/${input}`
  }

  return input
}

export const colorMap = {
  15: 'bg-red-300',
  14: 'bg-orange-200',
  13: 'bg-purple-200',
  12: 'bg-blue-200',
  11: 'bg-gray-200',
}

export const skillTypeMap = {
  a1: 'Độc chiêu',
  a2: 'Tuyệt kỹ',
  p1: 'Nội tại',
}

export const skillStateMap = {
  normal: 'Thường',
  weapon_awaken: 'Thức tỉnh vũ khí',
  lake_element: 'Nhị môn',
  thunder_element: 'Tứ môn',
  water_element: 'Lục môn',
}

export const SkillState = {
  NORMAL: 'normal',
  WEAPON_AWAKEN: 'weapon_awaken',
  LAKE_ELEMENT: 'lake_element',
  THUNDER_ELEMENT: 'thunder_element',
  WATER_ELEMENT: 'water_element',
}
