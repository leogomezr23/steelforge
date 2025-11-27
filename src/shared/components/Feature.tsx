import { useEffect, useState } from "react"
import { bannerData } from '../utils/data';


export const Feature = () => {

    const [currentSlider, setCurrentSlider] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlider((prevSlide) => (prevSlide + 1) % bannerData.length)
      }, 3000)

      return () => clearInterval(interval)
    }, [])

    const slide = bannerData[currentSlider];
    
  return (
    <div className="relative w-full overflow-hidden shadow-xl h-[500px] lg:h-[400px] z-0 mb-20">
        <div
          className="absolute inset-0 transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentSlider * 100}%)`,
            display: 'flex',
          }}
        >
        {bannerData.map((s, index) => (
          <img
            key={index}
            src={s.image}
            alt={s.text}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/45 opacity-80 to-transparent"></div>
      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center p-8 sm:p-12">
        <div className=" text-white">
          <p className="text-sm sm:text-lg font-semibold uppercase tracking-widest mb-2 opacity-80">
            {slide.subtitle}
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-5xl font-extrabold leading-tight mb-4">
            {slide.text}
          </h1>
          <p className="text-base sm:text-xl font-light mb-8 max-w-2xl mx-auto">
            {slide.description}
          </p>
          <div>
            <button className="border-2 border-[#FF7D00] py-2 px-6 font-semibold rounded-full cursor-pointer hover:bg-[#FFB166] hover:text-black hover:scale-120 transform transition-transform duration-300 ease-in-out">
              Cotiza ahora
            </button>
            <button></button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlider(index)}
            className={`w-2 h-2 rounded-md  transition-all duration-300 ${
              index === currentSlider
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
