import { useEffect, useState } from 'react';
import { ListItem } from './ListSlider';



export const SliderPhrase = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((prevSlider) => (prevSlider + 1) % ListItem.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);

  }, [])


  return (
   <div className="overflow-hidden relative w-full max-w-6xl mx-auto p-2 rounded-lg shadow-xl bg-black mb-20">
      <div className="h-20 md:h-28">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlider * 100}%)`,
            display: 'flex',
          }}
        >
          {ListItem.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex items-center justify-center p-4"
            >
              <h3
                className="
                text-xl md:text-3xl font-bold text-white 
                  px-2 sm:px-4 
              "
              >
                {item.toUpperCase()}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
