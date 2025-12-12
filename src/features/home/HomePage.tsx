import { Categories } from "../../shared/components/categories/Categories"
import { Directed } from "../../shared/components/content/Directed"
import { FirstCard } from "../../shared/components/content/FirstCard"
// import { Payments } from "../../shared/components/content/Payments"
import { Feature } from "../../shared/components/Feature"
import { SliderPhrase } from "../../shared/components/SliderPhrase/SliderPhrase"
// import { Navbar } from "../../shared/layouts/Navbar"

export const HomePage = () => {
  return (
    <div className="h-auto w-full">
        {/* <Navbar /> */}
        <Feature />
        <FirstCard />
        <Categories />
        <SliderPhrase />
        <Directed />
        {/* <Payments /> */}
    </div>
  )
}
