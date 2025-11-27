import { Route, Routes } from "react-router-dom"
import { HomePage } from "../../features/home/HomePage"
import { PageError } from "../../features/PageError/PageError"

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}/>

        <Route path="/*" element={<PageError />} />
    </Routes>
  )
}
