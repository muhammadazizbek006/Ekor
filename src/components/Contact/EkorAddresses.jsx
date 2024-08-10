import React, { useState } from 'react';
import { locations } from '../../data/Data';

const EkorAddresses = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-gray-100 p-8">
      <div className="containerb ">
          <h2 className="text-50 font-semibold text-head mb-10">Контакты</h2>
        <div className=' flex justify-between items-start'>
        
        <div className="w-[352px] space-y-4">

          <div className="space-y-4">
            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left text-sm font-medium text-gray p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
                  activeTab === index
                    ? 'bg-white text-blue-900 border-l-4 border-head'
                    : 'bg-foot text-gray-700'
                }`}
              >
                <h3 className="text-lg text-head font-semibold">{location.name}</h3>
                <p>{location.address}</p>
                <p>{location.phone}</p>
              </button>
            ))}
          </div>
        </div>
        
        <div className="">
          <div className="w-[736px] h-[530px]">
            <iframe
              src={locations[activeTab].ifream}
              className="w-full h-80 md:h-full border-none rounded-lg"
              loading="lazy"
              allowFullScreen
              title={locations[activeTab].title}
            ></iframe>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default EkorAddresses;
