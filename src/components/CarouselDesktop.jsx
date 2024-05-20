import { useState, useEffect } from "react";
import caroucelData from '/src/carouselData.json'

function CarouselDesktop() {
    const [current, setCurrent] = useState(0);
    const carousel = caroucelData.carousel

    // Auto-slide functionality
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrent((prev) => (prev + 1) % carousel.length);
        }, 5000); 
    
        return () => clearInterval(intervalId);
    }, [carousel.length]);

    return (
        <div className="overflow-hidden pt-10">
            <div className="flex w-full gap-x-4 xl:gap-x-11 transition-transform duration-700 ease-in-out"
                 style={{ transform: `translateX(-${current * (100 / 3)}%)` }}>
                    
                {carousel.concat(carousel.slice(0, 2)).map((item, index) => (
                    <div key={index} className="flex-shrink-0 lg:w-[50%] xl:w-[30%]  flex flex-col items-center bg-VaryLightGray px-8"
                        role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${carousel.length}`}>
                        <img 
                            src={item.img} 
                            alt={`${item.name} avatar`} 
                            className="w-20 h-20 mt-[-2.5rem]"
                            loading="lazy"
                        />
                        <p className='font-bold my-6 text-DarkBlue'>
                            {item.name} 
                        </p>
                        <q className='min-h-[9rem] text-DarkGrayishBlue leading-7 max-w-md'>
                            {item.quote} 
                        </q>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default CarouselDesktop;
