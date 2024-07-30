"use client";

import { ThemeProvider } from "next-themes"

const Provider = ({children}) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
    {children}
  </ThemeProvider>
  )
}

export default Provider
