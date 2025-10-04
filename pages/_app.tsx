import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import ReactBricksApp from "../components/ReactBricksApp"
import "../css/style.css"  // your own global styles

const MyApp = (props: AppProps) => {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="color-mode"
      enableSystem={false}
      defaultTheme="light"
    >
      <ReactBricksApp {...props} />
    </ThemeProvider>
  )
}

export default MyApp
