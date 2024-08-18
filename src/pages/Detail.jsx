import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { seafood } from '../data/Data';
import { useParams } from 'react-router-dom';
// img
import ptichka from '../imgs/detail/ptichka.svg'
import Subscribe from '../components/home/Subscribe';
const Detail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  
  const Production = seafood.filter((e) => e.id == id);

  // Copy the first image to ensure at least 4 thumbnails
  const thumbnails = Production.length > 0
    ? [Production[0], Production[0], Production[0], Production[0], Production[0]]
    : [];

  return (
    <>

        <section className='py-10'>
          <div className="containerb flex ">
            {/* left */}
            <div className='w-[448px] h-[548px] mr-8'>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 rounded-xl mb-5"
              >
                {Production.map((e) => (
                  <SwiperSlide key={e.id}>
                    <img className=' h-[448px]' src={e.img} alt={`Product ${e.id}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
    
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={5} // Adjust space between thumbnails
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper "
              >
                {thumbnails.map((e, index) => (
                  <SwiperSlide key={index} className='flex items-center justify-center'>
                    <img className='w-[80px] h-[80px]' src={e.img} alt={`Thumbnail ${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* cenetr */}
            <div className='max-w-[353px] mr-8'>
              {
                Production.map((e)=>{
                  return(
                    <div>
                      <h3 className='text-2xl font-semibold text-head leading-7 mb-5'>{e.nameandinfo}</h3>
                      <div className='mb-5'>
                        <p className='text-base font-semibold text-head leading-5 mb-5 '>Характеристики</p>
                        <div className='flex'>
                          <p className='text-xs font-medium text-gray mr-3'>общий объем продукта: </p>
                          <p className='text-head text-sm font-medium'>{e.Wholesale}</p>
                        </div>
                        <div className='flex'>
                          <p className='text-xs font-medium text-gray mr-3'>Дата выработки: </p>
                          <p className='text-head text-sm font-medium'>{e.productiondate}</p>
                        </div>
                        <div className='flex'>
                          <p className='text-xs font-medium text-gray mr-3'>Срок годности: </p>
                          <p className='text-head text-sm font-medium'>{e.Bestbeforedate}</p>
                        </div>
                      </div>
                      <div>
                        <p className='text-base font-semibold text-head mb-2'>Описание</p>
                        <p className='text-sm font-medium text-head '>Каждый стейк представляет собой тщательно выбранную и обработанную хвостовую часть трески, замороженную с сохранением свежести и натурального вкуса.
                        Произведенный с использованием передовых технологий и высоких стандартов качества, этот продукт гарантирует неповторимый опыт приготовления. Отличается высоким содержанием мяса и богатством природных вкусов, треска от Экор станет превосходным выбором для тех, кто ценит свежесть и качество морепродуктов.
                        Удобная форма порционирования (1/8) обеспечивает гибкость в использовании, позволяя легко подготовить блюда различной сложности. Полезные питательные вещества и нежная текстура трески сделают ваш приём пищи неповторимым.</p>
                      </div>
                    </div>
                  )
                })
    
              }
            </div>
            {/* right */}
            <div className='w-64  bg-white h-[300px] rounded-lg p-5'>
            
                {
                  Production.map((e)=>{
                    return(
                      <div className='space-y-5'>
                        {/* top */}
                        <div className='border-b border-b-input pb-5'>
                          <p className='text-2xl font-semibold text-head leading-7 mb-1'>{e.price} ₽</p>
                          <div className='mb-5 flex justify-between'>
                            <span className='text-xs font-medium text-gray leading-3'>Цена,  ₽ / кг </span>
                            <span className='text-sm font-medium text-head'>{e.price}</span>
                          </div>
                          <button className='bg-sariq text-head text-sm font-semibold py-3 w-[215px] rounded-lg '>В корзину</button>
                          
                        </div>
                        {/* Наличие */}
                        <div className='space-y-3'>
                          <div className='flex space-x-3 items-start'>
                            <img src={ptichka} alt="#" />
                            <p className='text-sm font-medium text-head'>На складах в Москве <br /> <span className='text-xs font-medium text-gray'>Много</span></p>
                          </div>
                          <div className='flex space-x-3 items-start'>
                            <img src={ptichka} alt="#" />
                            <p className='text-sm font-medium text-head'>На складе в Санкт-Петербурге <br /> <span className='text-xs font-medium text-gray'>Мало</span></p>
                          </div>
                        </div>
                      </div>
    
                    )
                  })
                }
              
    
            </div>
          </div>
        </section>
        <Subscribe/>
    </>
  );
}

export default Detail;
