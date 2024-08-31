import React from 'react';
import { ourattentionmatters } from '../../data/Data';

const OurAttentionMatters = () => {
  return (
    <section className='py-20'>
      <div className="containerb">
        <h2 className=' text-xl sm:text-2xl md:text-3xl lg:text-40 text-center font-semibold leading-40 text-head mb-10'>
          Наш опыт и репутация — <br /> это самое главное
        </h2>
        <ul className="grid   custom-grid">
          {ourattentionmatters.map((e) => {
            return (
              <li key={e.id} className="bg-white flex flex-col justify-between min-h-60 p-6 rounded-[20px] shadow">
                <span className='text-xs font-medium text-head'>{e.raqam}</span>
                <h3 className=" text-base 858:text-xl  lg:text-2xl font-semibold  text-head">{e.title}</h3>
                <p className="text-sm font-medium text-gray">{e.sharx}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default OurAttentionMatters;
