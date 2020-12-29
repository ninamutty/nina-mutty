import React, { useState, useLayoutEffect } from "react"
import ThemeContext from "../../context/ThemeContext"
import Blob from "./Blob"

const App = (): JSX.Element => {
  const [isLightMode, setIsLightMode] = useState(true)

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      const prefersLightMode = window.matchMedia(
        "(prefers-color-scheme: light)"
      )
      setIsLightMode(prefersLightMode.matches ? true : false)
    }
  }, [])

  return (
    <ThemeContext.Consumer>
      {value => (
        <div className="w-screen min-h-screen justify-items-center text-center justify-center flex flex-col dark:bg-coolGray-900">
          <Blob color={isLightMode ? value['900'] : value['200'] } />
          <div className="z-10">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-8xl uppercase text-center font-extralight tracking-widest text-white dark:text-coolGray-900">
              Nina Mutty
            </h1>
            <h2 className="text-sm sm:text-sm md:text-md lg:text-2xl uppercase text-center font-extralight tracking-widest text-white dark:text-coolGray-900">
              Senior Software Engineer
            </h2>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default App
