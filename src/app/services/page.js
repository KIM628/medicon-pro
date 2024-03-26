'use client';
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Services() {
  const slides = [
    {url:'/assets/img/Reagents/Reagents-101.jpg'},
    {url:'/assets/img/Reagents/Reagents-102.jpg'},
    {url:'/assets/img/Reagents/Reagents-103.jpg'},
    {url:'/assets/img/Reagents/Reagents-104.jpg'},
  ]

  const [currentIndex, seCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    seCurrentIndex(newIndex);
  }
  
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    seCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    seCurrentIndex(slideIndex)
  }

  return (
    <section className="section">
      <div className="max-w-[560px] h-[900px] w-full m-auto py-16 px-4 relative group">
        <h4 className="h4 mb-5 text-center">Reagents</h4>
        <div
          style={{backgroundImage:`url(${slides[currentIndex].url})`}}
          className="w-full h-full rounded-xl bg-center bg-cover duration-300">
          {/* Left arrow  */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft
              onClick={prevSlide}
              size={20} />
          </div>
          {/* Right arrow  */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight
              onClick={nextSlide}
              size={20} />
          </div>
        </div>
          <div className="flex bottom-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div 
                key={slideIndex}
                onClick={()=>goToSlide(slideIndex)}
                className="text-2xl cursor-pointer">
                <RxDotFilled/>
              </div>
            ))}
          </div>
      </div>

    </section>
  )
}