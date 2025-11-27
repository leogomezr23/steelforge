import { useEffect, useState } from 'react';
import { ListPay } from './ListItem/ListPay';



export const Payments = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((prevSlider) => (prevSlider + 1) % ListPay.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);

  }, [])


  return (
   <div className="overflow-hidden relative w-full max-w-6xl mx-auto p-2 rounded-lg mb-20">
        <h2 className='text-4xl font-semibold mb-20 text-center'>Medios de Pago</h2>
      <div className="h-20 md:h-28">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlider * 100}%)`,
            display: 'flex',
          }}
        >
          {ListPay.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex items-center justify-center p-4"
            >
                <img src={item} alt={`Payment Method ${index + 1}`} className="h-12 md:h-20 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
