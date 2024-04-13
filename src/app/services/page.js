'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <section className='section'>
      <div className="max-w-[560px] h-[900px] w-full m-auto py-16 px-4 relative group">
        <h4 className="h4 mb-5 text-center">Ouer Services</h4>
        <p>We Provide Maintanens and Reagents for : </p>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src="/assets/img/devices/ABX_Micros.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/devices/Dymind.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/devices/ERMA-PCE-210N.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/devices/Sysmex-KX21.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/devices/Sysmex-XS500i.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
