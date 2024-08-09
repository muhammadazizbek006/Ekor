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
    <section className='mb-12'>
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
                    
                    <SwiperSlide key={e.id} 
                    style={{ backgroundImage: `url(${e.bg})`, backgroundSize: 'cover' }}
                     className='h-[400px] pl-10 pt-10 pb-16 flex relative rounded-2xl z-0  '>
                        {/* left */}
                        <div className={`${e.class}`}>
                          <h2 className='text-[50px] font-semibold text-white leading-[50px] mb-5'>{e.title}</h2>
                         
                          <div className='max-w-[288px]'>
                             <p className='text-base font-medium text-white mb-7'>{e.eslatma}</p>
                             <Link className='px-20 inline-block bg-sariq  py-4 rounded-lg'>Получить прайс</Link>
                          </div>
                        </div>
                        {/* right */}
                        <div className={`${e.top} absolute top-0 -right-2 `}>
                          <img className={`${e.class2} z-10  rounded-[55px] r ` } src={e.img} alt={e.title} />
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