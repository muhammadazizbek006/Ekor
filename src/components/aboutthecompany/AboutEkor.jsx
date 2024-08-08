import React from 'react'
import { advantages } from '../../data/Data'

const AboutEkor = () => {
  return (
    <section>
        <div className="containerb">
            <h2 className='text-40 leading-40 text-head font-semibold mb-5'>Экор — крупная производственно-торговая компания, занимающаяся производством и реализацией рыбы и морепродуктов</h2>
            {/* ekor xaqida sharx */}
            <div className='text-sm  font-medium text-head  space-y-3 mb-10'>
                <p>С 1998 года компания «Экор» предоставляет широкий ассортимент замороженной рыбы, готовых продуктов и других продуктов питания. Компания имеет в своём составе более 40 автомобилей рефрижераторов, которые позволяют быстро доставить охлаждённую и замороженную рыбу по Москве и МО. Общий оборот компаний составляет более 2,5 миллиардов руб в год. Численность сотрудников более 100 человек и более 3000 постоянных клиентов. </p>
                <p>Компания «Экор» предлагает разнообразный выбор рыбы и морепродуктов оптом с доставкой при заказе от 15000 рублей. Она осуществляет прямые поставки из различных регионов и стран, предоставляет отсрочку платежа, а также обеспечивает конкурентоспособные цены и имеет открытую бухгалтерскую отчётность. Разработанный компанией чат-бот оптовых цен, даёт возможность оперативно запросить и сравнить цены. </p>
            </div>
            {/*  */}
            <ul className='grid grid-cols-4 gap-x-5'>
                {
                    advantages.map((e)=>{
                        return(
                            <li key={e.id} className='bg-white rounded-2xl p-5 flex flex-col justify-between h-36'>
                                <h3 className='text-40 leading-40 text-head font-semibold'>{e.advantage}</h3>
                                <p className='text-sm font-medium text-gray'>{e.eslatma}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default AboutEkor