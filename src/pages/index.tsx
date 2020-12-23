import React, { useState, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"
import BlobContainer from "../components/Blob/BlobContainer"
import { themes, Theme } from "./themes"

const App = (): JSX.Element => {
  const [theme, setTheme] = useState(themes.camp)

  const getRandomTheme = (): Theme => {
    const keys = Object.keys(themes)
    const randomElement = Math.floor(Math.random() * keys.length)
    const key = keys[randomElement]
    return themes[key]
  }

  useEffect(() => {
    setTheme(getRandomTheme())
  }, [])

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <BlobContainer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
