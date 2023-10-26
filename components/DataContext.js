import { createContext, useContext, useState } from 'react'

const DataContext = createContext(null)

export default function DataProvider({ children }) {
  const [headerActive, setHeaderActive] = useState(null)

  return (
    <DataContext.Provider value={{ headerActive, setHeaderActive }}>
      {children}
    </DataContext.Provider>
  )
}

export function useDataContext() {
  return useContext(DataContext)
}
