import React from 'react';



const DeliveryConditions = () => {
  return (
    <section className='py-20 bg-gray-100'>
      <div className="containerb">
        <h2 className='text-head text-40 leading-40 font-semibold'>
          Условия доставки, стоимости <br /> и возврата товара
        </h2>
        <div className="mt-10 space-y-6">
          {deliveryData.map((item, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full">
                <img src={`/path/to/icons/${item.icon}`} alt={item.title} className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className='text-18 font-semibold mb-2'>{item.title}</h3>
                <p className='text-16 text-gray-700'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryConditions;
