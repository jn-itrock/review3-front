import { ThemeProvider } from "styled-components"
import { theme } from "@/utils/theme"

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <p>Initial theme</p>
    </ThemeProvider>
  )
}
