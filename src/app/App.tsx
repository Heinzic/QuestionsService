import { lazy } from "react"

const MainPage = lazy(() => import("../pages/MainPage")) 

function App() {
  return (
    <>
        <MainPage />
    </>
  )
}

export default App
