import React, { useState, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"
import { themes, Theme } from "../context/themes"
import BlobContainer from "../components/Blob/BlobContainer"

const App = (): JSX.Element => {
  const [theme, setTheme] = useState(themes.blueGray)

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
