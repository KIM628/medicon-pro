'use client';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import {useEffect} from "react";


export default function Testimonials() {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="testimonial bg-testimonials bg-cover bg-right bg-no-repeat py-12 xl:min-h-[595px] xl:py-0">
      <div className="testimonial__constainer container mx-auto">
        <div className='flex flex-col items-center gap-x-14 xl:flex-row'>
          {/* img */}
          <div className="hidden xl:flex">
            <img src="assets/img/testimonials/img.png" alt="testimonial" />
          </div>
          {/* slider */}
          <div className='max-w-[98%] xl:max-w-[710px]'>
            {/*  Slider main container */}
            <div className="swiper h-[400px]">
              {/* Additional required wrapper */}
              <div className="swiper-wrapper">
                {/* Slide 1 */}
                <div className="swiper-slide">
                  <div className='h-full flex flex-col justify-center items-start'>
                    <div className='max-w-[680px] mx-auto text-center xl:text-left'>
                      <p className='font-light relative text-[22px] text-[#4c5354] leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7'>
                        {/* message */}
                        <span className='mx-2'>
                          this is the best deal i have ever made NUM 1 
                        </span>
                      </p>
                      {/* name */}
                      <div className='text-[26px] text-[#4c5354] font-semibold'>
                        K.I.M
                      </div>
                      {/* Job */}
                      <div className='text-[#9ab4b7] font-medium uppercase tracking-[2.24px]'>
                        Customer
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide 2 */}
                <div className="swiper-slide">
                  <div className='h-full flex flex-col justify-center items-start'>
                    <div className='max-w-[680px] mx-auto text-center xl:text-left'>
                      <p className='font-light relative text-[22px] text-[#4c5354] leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7'>
                        {/* message */}
                        <span className='mx-2'>
                          this is the best deal i have ever made NUM 2
                        </span>
                      </p>
                      {/* name */}
                      <div className='text-[26px] text-[#4c5354] font-semibold'>
                        K.I.M
                      </div>
                      {/* Job */}
                      <div className='text-[#9ab4b7] font-medium uppercase tracking-[2.24px]'>
                        Customer
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide 3 */}
                <div className="swiper-slide">
                  <div className='h-full flex flex-col justify-center items-start'>
                    <div className='max-w-[680px] mx-auto text-center xl:text-left'>
                      <p className='font-light relative text-[22px] text-[#4c5354] leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7'>
                        {/* message */}
                        <span className='mx-2'>
                          this is the best deal i have ever made Num 3
                        </span>
                      </p>
                      {/* name */}
                      <div className='text-[26px] text-[#4c5354] font-semibold'>
                        K.I.M
                      </div>
                      {/* Job */}
                      <div className='text-[#9ab4b7] font-medium uppercase tracking-[2.24px]'>
                        Customer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* swiper pagination & not showing */}
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}