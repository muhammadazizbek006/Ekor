import React from 'react'
import { process } from '../../data/Data'
const processing = () => {
  return (
        <section className='pt-10 pb-14'>
        <div className="containerb">
            <h2 className='text-50 font-semibold text-head leading-50 mb-10'>Рыбоперерабатывающее <br /> предприятие ПТК Экор-Фиш</h2>
            <ul className='grid grid-cols-4 gap-x-5'>
                {
                    process.map((e)=>{
                        return(
                            <li key={e.id}>
                                <img className='rounded-lg mb-3' src={e.img} alt={e.title} />
                                <h3 className='text-lg text-head  font-semibold leading-5'>{e.title}</h3>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default processing