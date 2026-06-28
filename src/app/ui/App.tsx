import { lazy } from "react"

const PublicQuestionsPage = lazy(() => import("../../pages/public-questions-page/PublicQuestionsPage")) 

function App() {
  return (
    <>
        <PublicQuestionsPage />
    </>
  )
}

export default App
