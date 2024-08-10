import React from 'react';

import { deliveryData } from '../../data/Data';

const DeliveryConditions = () => {
  return (
    <section className='py-20 bg-gray-100'>
      <div className="containerb">
        <h2 className='text-head text-40 leading-40 font-semibold'>
          Условия доставки, стоимости <br /> и возврата товара
        </h2>
        <div className="mt-10 space-y-6">
          {deliveryData.map((e) => (
            <div key={e.id} className="bg-white p-6 shadow-lg rounded-lg flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full mr-4">
                <img src={e.icon} alt={e.title} className="w-6 h-6" />
              </div>
              <div className="">
                <h3 className='text-lg text-head  font-semibold mb-2'>{e.title}</h3>
                <p className='text-sm font-medium text-gray'>{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryConditions;
