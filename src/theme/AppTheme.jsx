import { ThemeProvider } from "@emotion/react"
import { CssBaseline, useMediaQuery } from "@mui/material"
import { redTheme } from "./redTheme"
import { useMemo } from "react";



export const AppTheme = ({children}) => {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(() => redTheme(prefersDarkMode), [prefersDarkMode])



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}