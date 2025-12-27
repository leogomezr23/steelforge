import { Route, Routes } from "react-router-dom"
import { HomePage } from "../../features/home/HomePage"
import { PageError } from "../../features/PageError/PageError"
import { LayoutMain } from "../../shared/layouts/LayoutMain"
import { Faq } from "../../features/faq/Faq"

export const Router = () => {
  return (
    <Routes>
       <Route path='/' element={<LayoutMain />}>
        <Route index element={<HomePage />}/>
        {/* <Route path='products' element={<ProductsPage />}/>
        <Route path='services' element={<ServicesPage />}/> */}
        <Route path='faq' element={<Faq />}/>
      </Route>
      <Route path="/*" element={<PageError />} />
    </Routes>
  )
}
