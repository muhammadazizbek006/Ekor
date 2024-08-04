import React from 'react';
import { ourattentionmatters } from '../../data/Data';

const OurAttentionMatters = () => {
  return (
    <section className='py-20'>
      <div className="containerb">
        <h2 className='text-40 text-center font-semibold leading-40 text-head'>
          Наш опыт и репутация — <br /> это самое главное
        </h2>
        <ul className="grid gap-6 mt-10 custom-grid">
          {ourattentionmatters.map((e, index) => {
            return (
              <li key={index} className="bg-white p-6 rounded shadow">
                <h3 className="text-24 font-semibold mb-2">{e.title}</h3>
                <p className="text-16">{e.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default OurAttentionMatters;
