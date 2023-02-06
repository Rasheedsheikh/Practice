import React  ,{createContext} from 'react'

export const ThemeContext= createContext()
 export const ThemeProvider = ({children}) => {
  return (
    <div>ThemeProvider</div>
  )
}

