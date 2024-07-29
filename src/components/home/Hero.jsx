import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

// data
import { Carusel } from '../../data/Data';
const Hero = () => {
  return (
    <section>
        <div className="containerb">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {
            Carusel.map((e)=>{
                return(
                    
                    <SwiperSlide 
                    style={{ backgroundImage: `url(${e.img})`, backgroundSize: 'cover' }}
                     className='h-[400px] pl-10 pt-10 pb-16 '>
                        {/* left */}
                        <div className={`${e.class}`}>
                          <h2 className='text-[50px] font-semibold text-white leading-[50px] mb-5'>{e.title}</h2>
                         
                          <div className='max-w-[288px]'>
                             <p className='text-base font-medium text-white mb-7'>{e.eslatma}</p>
                             <Link className='px-20 inline-block bg-sariq  py-4 rounded-lg'>Получить прайс</Link>
                          </div>
                        </div>
                    </SwiperSlide>
                )
            })
        }

      </Swiper>
        </div>
    </section>
  )
}

export default Hero