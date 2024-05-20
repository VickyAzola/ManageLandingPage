import { useState, useEffect } from "react"
import caroucelData from '/src/carouselData.json'

function CarouselMobile() {

    const [current, setCurrent] = useState(0)
    const carousel = caroucelData.carousel

    const carruselBtn = [
        {id: '0'},
        {id: '1'},
        {id: '2'},
        {id: '3'},
    ]

    //handle change of image on click
    const handleClick = (index) => {
        setCurrent(index)
    }

    // Auto-slide functionality
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrent((prev) => (prev + 1) % carousel.length);
        }, 4000); 

        return () => clearInterval(intervalId);
    }, [carousel.length]);

    const baseClassCarrusel = {
        base : 'bg-white border border-BrightRed h-2 w-2 rounded-full hover:cursor-pointer',
        active : 'active [&.active]:bg-BrightRed'
    }

    return (
        <>
        <div className="flex flex-col items-center">
            {carousel.map((item, index) => (
                <div 
                    key={index} 
                    className={`flex flex-col items-center bg-VaryLightGray px-8 
                        ${index === current ? 'block' : 'hidden'}`} 
                    role="group" 
                >
                    <img
                        src={item.img}
                        alt={`${item.name} avatar`}
                        className="w-20 h-20 mt-[-2.5rem]"
                        loading="lazy"
                    />
                    <p className='font-bold my-6 text-DarkBlue'>
                        {item.name}
                    </p>
                    <q className='min-h-[9rem] text-DarkGrayishBlue leading-7 md:max-w-md'>
                        {item.quote}
                    </q>
                </div>
            ))}

            {/* Navigation buttons */}
            <div className='mt-4 space-x-1.5' role="tablist">
                {carruselBtn.map((item, index) => (
                    <button
                        onClick={() => handleClick(index)}
                        key={index}
                        className={`${baseClassCarrusel.base} ${index === current ? baseClassCarrusel.active : ''}`}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-selected={index === current}
                        role="tab"
                    >
                    </button>
                ))}
            </div>
        </div>
        </>
    )
}

export default CarouselMobile
