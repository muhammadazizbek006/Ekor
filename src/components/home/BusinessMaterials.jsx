import React from 'react';
import { businessmaterials } from '../../data/Data';

const BusinessMaterials = () => {
  return (
    <section className='py-20'>
      <div className="containerb">
        <h2 className=' text-xl sm:text-2xl md:text-3xl lg:text-40 font-semibold leading-40 text-head text-center mb-10'>
          Мы специализируемся на поставках для различных сфер бизнеса
        </h2>
        <div className="grid grid-cols-1 524:grid-cols-2 858:grid-cols-3 lg:grid-cols-4 gap-6">
          {businessmaterials.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessMaterials;
