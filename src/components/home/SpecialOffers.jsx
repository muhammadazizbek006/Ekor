import React from 'react'
import { specialoffers } from '../../data/Data'

const SpecialOffers = () => {
  return (
   <section>
    <div className="containerb">
        <h2 className='text-40 text-head font-semibold mb-10'>Специальные предложения для новых клиентов</h2>
      <ul>
        {
          specialoffers.map((e)=>{
            return(
              <li className='flex items-center border-y border-special py-4 space-x-[250px]' key={e.id}>
  {/* left */}
  <span className='text-xs font-medium text-gray'>{e.raqam}</span>
  {/* right */}
  <div className='flex justify-between w-full'>
    <p className='text-lg font-semibold text-head max-w-[384px]'>{e.savol}</p>
    <p className='max-w-[351px] text-sm font-medium text-head'>{e.javob}</p>
  </div>
</li>

            )
          })
        }
      </ul>
    </div>
   </section>
  )
}

export default SpecialOffers