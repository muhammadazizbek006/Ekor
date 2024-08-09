import React from 'react'

const SpecialoffersComponent = ({id, raqam, savol, javob}) => {
  return (

        <li className='flex items-center border-y border-special py-4 space-x-[250px]' key={id}>
                {/* left */}
                <span className='text-xs font-medium text-gray'>{raqam}</span>
                {/* right */}
                <div className='flex justify-between   w-full'>
                  <p className='text-lg font-semibold text-head max-w-[384px]'>{savol}</p>
                  <p className='max-w-[351px] text-sm font-medium text-head'>{javob}</p>
                </div>
              </li>

  )
}

export default SpecialoffersComponent