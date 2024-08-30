import React from 'react'

const SpecialoffersComponent = ({id, raqam, savol, javob}) => {
  return (

        <li className='flex  items-center border-y border-special py-4 space-x-10 858:space-x-20 lg:space-x-[250px]' key={id}>
                {/* left */}
                <span className='text-xs font-medium text-gray'>{raqam}</span>
                
                {/* right */}
                <div className='flex flex-col md:flex-row  justify-between   w-full'>
                  <p className=' text-base lg:text-lg font-semibold text-head max-w-[384px]'>{savol}</p>
                  <p className='max-w-[351px] text-xs lg:text-sm font-medium text-head'>{javob}</p>
                </div>
              </li>

  )
}

export default SpecialoffersComponent