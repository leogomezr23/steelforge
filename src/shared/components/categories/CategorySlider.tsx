import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './categories.css';

// Importa los datos que creaste arriba
import { ListCategories } from './ListCategories';

export const CategorySlider = () => {
  return (
   <div className="py-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Nuestros Productos
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1} 
        spaceBetween={20} 
        navigation 
        pagination={{ clickable: true }} 
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper p-4" 
      >
         {ListCategories.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
              <div className="h-48 w-full"> 
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-corp-blue mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mb-8">
                  {card.description}
                </p>
                <button className="border-2 border-[#FF7D00] py-2 px-6 font-semibold rounded-full cursor-pointer hover:bg-[#FFB166] hover:text-black hover:scale-120 transform transition-transform duration-300 ease-in-out">
                    Ver más
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
</div>
  );
};