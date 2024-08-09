import React from 'react'
import { specialoffers } from '../../data/Data'
import SpecialoffersComponent from './SpecialoffersComponent'
const SpecialOffers = () => {

  return (

  <section className='py-20'>
    <div className="containerb">
        <h2 className='text-40 text-head font-semibold mb-10'>Специальные предложения для новых клиентов</h2>
      <ul>
        {
          specialoffers.map((e)=>{
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

export default SpecialOffers