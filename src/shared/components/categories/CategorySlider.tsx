// CategorySlider.tsx
import React, { useState, useEffect, type FC } from 'react';
import { Modal } from './ModalList'; 
import { useWindowSize } from './hook/useWindowSize'; 

interface Category {
    id: number;
    image: string;
    title: string;
    description: string;
}

import { ListCategories } from './ListCategories'; 

const MAX_CARD_WIDTH_PX = 400;
const CARD_GAP_PX = 20; 

export const CategorySlider: FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); 
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null); 
    
    const { width } = useWindowSize(); 
    
    const totalCategories: number = ListCategories.length;

    let cardsPerView: number = 1; 
    if (width && width >= 768) { 
        cardsPerView = 2;
    }
    if (width && width >= 1024) {
        cardsPerView = 3;
    }
    cardsPerView = Math.min(cardsPerView, totalCategories);

    const maxIndex: number = totalCategories > cardsPerView ? totalCategories - cardsPerView : 0;

    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [cardsPerView, currentIndex, maxIndex]);


    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => 
            prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
    };

    const prevSlide = (): void => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? maxIndex : prevIndex - 1
        );
    };

    useEffect(() => {
        if (totalCategories > cardsPerView) {
            const interval = setInterval(nextSlide, 3000); 
            return () => clearInterval(interval);
        }
        return undefined; 
    }, [totalCategories, cardsPerView, nextSlide]); 


    const getTranslateXValue = (): string => {
        const moveAmount = currentIndex * (MAX_CARD_WIDTH_PX + CARD_GAP_PX);
        return `-${moveAmount}px`;
    };

    const goToPage = (pageIndex: number): void => {
        const newIndex = pageIndex * 1; 
        setCurrentIndex(Math.min(newIndex, maxIndex));
    }


    const openModal = (category: Category): void => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
        setSelectedCategory(null);
    };
    
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);


    return (
        <div className="py-10 relative"> 
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                Nuestros Productos
            </h2>

            <div className="flex justify-center items-center">
                {totalCategories > cardsPerView && (
                    <button 
                        onClick={prevSlide}
                        className="absolute z-30 left-0 md:left-4 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors" 
                        aria-label="Anterior"
                    >
                        &lt; 
                    </button>
                )}
                <div 
                    className="w-full max-w-7xl px-4 overflow-hidden" 
                    style={{ maxWidth: `${(MAX_CARD_WIDTH_PX * cardsPerView) + (CARD_GAP_PX * (cardsPerView - 1))}px` }}
                > 
                    <div 
                        className="flex flex-nowrap transition-transform duration-700 ease-in-out gap-5" 
                        style={{ 
                            transform: `translateX(${getTranslateXValue()})`,
                            width: `${totalCategories * (MAX_CARD_WIDTH_PX + CARD_GAP_PX)}px` 
                        }}
                    >
                        {ListCategories.map((card: Category) => (
                            <div 
                                key={card.id} 
                                className="flex-none" 
                                style={{ 
                                    width: `${MAX_CARD_WIDTH_PX}px` 
                                }}
                            >
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] h-full flex flex-col">
                                    <div className="w-full relative pb-[100%] h-0 overflow-hidden"> 
                                        <img 
                                            src={card.image} 
                                            alt={card.title} 
                                            className="absolute top-0 left-0 w-full h-full object-cover" 
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col justify-between flex-grow"> 
                                        <div>
                                            <h3 className="text-xl font-semibold text-corp-blue mb-2">
                                                {card.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-4 line-clamp-3"> 
                                                {card.description}
                                            </p>
                                        </div>
                                        <button 
                                            onClick={() => openModal(card)} 
                                            className="mt-auto border-2 border-[#FF7D00] py-2 px-6 font-semibold rounded-full cursor-pointer hover:bg-[#FFB166] hover:text-black hover:scale-120 transform transition-transform duration-300 ease-in-out self-start"
                                        >
                                            Ver más
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {totalCategories > cardsPerView && (
                    <button 
                        onClick={nextSlide}
                        className="absolute z-30 right-0 md:right-4 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors" 
                        aria-label="Siguiente"
                    >
                        &gt; 
                    </button>
                )}
            </div>
            {totalCategories > cardsPerView && (
                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: Math.ceil(totalCategories / cardsPerView) }).map((_, index: number) => {
                        const pageStartIndex = index * 1;
                        return (
                            <button
                                key={index}
                                onClick={() => goToPage(index)} 
                                className={`w-3 h-3 rounded-full transition-colors duration-700 ${
                                    currentIndex === index
                                        ? 'bg-[#FF7D00]' 
                                        : 'bg-gray-300' 
                                }`}
                                aria-label={`Ir a la tarjeta ${index + 1}`}
                            ></button>
                        );
                    })}
                </div>
            )}
            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal}
            >
                {selectedCategory && (
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-corp-blue mb-4">
                            {selectedCategory.title}
                        </h3>
                        <div className="h-64 w-full mb-4 rounded-lg overflow-hidden mx-auto">
                            <img 
                                src={selectedCategory.image} 
                                alt={selectedCategory.title} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-gray-700 text-left">
                            {selectedCategory.description}
                        </p>
                        <p className="text-gray-500 text-sm mt-4 text-left border-t pt-2">
                            **ID del Producto:** {selectedCategory.id} | Detalles de la Categoría.
                        </p>
                    </div>
                )}
            </Modal>
        </div>
    );
};