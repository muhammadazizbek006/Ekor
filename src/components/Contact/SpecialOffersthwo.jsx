import React from 'react'
import { specialoffers2 } from '../../data/Data'
import SpecialoffersComponent from '../home/SpecialoffersComponent'
const SpecialOffersthwo = () => {
  return (
    <section className='py-20'>
    <div className="containerb">
        <h2 className='text-40 text-head font-semibold mb-10'>Наши реквизиты</h2>
      <ul>
        {
          specialoffers2.map((e)=>{
            return(
              <SpecialoffersComponent
                key={e.id}
                raqam={e.raqam}
                savol={e.savol}
                javob={e.javob}
              />
            
          )
          })
        }
      </ul>
    </div>
   </section>
  )
}

export default SpecialOffersthwo