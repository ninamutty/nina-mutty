import React from "react"
import { themes, Theme } from "./themes"

const ThemeContext = React.createContext<Theme>(themes.blueGray)

export default ThemeContext
