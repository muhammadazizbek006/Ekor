import React from 'react'
import {delivery} from '../../data/Data'
const AboutDelivery = () => {
  return (
    <section>
        <div className="containerb">
            <h2 className='text-50  text-head font-semibold mb-5'>Доставка</h2>
            {/* delivery sharx */}
            <div className='text-head text-sm font-medium mb-10 '>
                <p className='mb-2'>Наша компания имеет собственную современную службу доставки, имеющую более 40 автомобилей оснащённых холодильными установками и GPS-трекерами. Комплектность заказов при погрузке и разгрузке контролируется с помощью считывателей штрих — кодов, </p>
                <p>что позволяет избежать пересортицы. Маршруты для каждого автомобиля рассчитываются с помощью логистического программного обеспечения. Все это позволяет нам доставлять ваш товар точно в срок и именно в том ассортименте, что вы заказывали.</p>
            </div>
            {/*  */}
            <ul className='grid grid-cols-3 gap-x-5 '>
                {
                    delivery.map((e)=>{
                        return(
                            <li key={e.id}>
                                <img className='mb-3' src={e.img} alt={e.title} />
                                <h3 className='text-head text-lg font-semibold'>{e.title}</h3>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default AboutDelivery