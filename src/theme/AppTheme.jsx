import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { redTheme } from "./redTheme"

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={redTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}