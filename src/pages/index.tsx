import React, { useState, useLayoutEffect } from "react"
import ThemeContext from "../context/ThemeContext"
import { themes, Theme } from "../context/themes"
import MetaData from "../context/MetaData"
import BlobContainer from "../components/Blob/BlobContainer"

const App = (): JSX.Element => {
  const [theme, setTheme] = useState(themes.blueGray)

  const getRandomTheme = (): Theme => {
    const keys = Object.keys(themes)
    const randomElement = Math.floor(Math.random() * keys.length)
    const key = keys[randomElement]
    return themes[key]
  }

  useLayoutEffect(() => {
    setTheme(getRandomTheme())
  }, [])

  return (
    <ThemeContext.Provider value={theme}>
      <MetaData />
      {/* <div className="App"> */}
        <BlobContainer />
      {/* </div> */}
    </ThemeContext.Provider>
  )
}

export default App
