import React, { useState } from 'react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('office');

  const renderContent = () => {
    switch (activeTab) {
      case 'office':
        return (
          <>
            <h2 className="text-xl font-semibold">Центральный офис</h2>
            <p>г. Москва, Открытое шоссе, 13, стр. 1</p>
            <p>+7 (495) 688-72-28</p>
          </>
        );
      case 'warehouse1':
        return (
          <>
            <h2 className="text-xl font-semibold">Склад отгрузки</h2>
            <p>г. Москва, ул. 2-я Кабельная, 2с5</p>
            <p>+7 (495) 688-72-28</p>
          </>
        );
      case 'warehouse2':
        return (
          <>
            <h2 className="text-xl font-semibold">Склад отгрузки</h2>
            <p>Ленинградская область, Ломоносовский район, Виллозское городское поселение</p>
            <p>+7 (495) 688-72-28</p>
          </>
        );
      case 'production':
        return (
          <>
            <h2 className="text-xl font-semibold">Производство</h2>
            <p>Московская область, Балашиха, деревня Черное, Черноенская улица, д. 76</p>
            <p>+7 (495) 688-72-28</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Контакты</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <button
              className={`w-full p-4 rounded-md shadow-md ${
                activeTab === 'office' ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
              onClick={() => setActiveTab('office')}
            >
              Центральный офис
            </button>
            <button
              className={`w-full p-4 rounded-md shadow-md mt-2 ${
                activeTab === 'warehouse1' ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
              onClick={() => setActiveTab('warehouse1')}
            >
              Склад отгрузки (Москва)
            </button>
            <button
              className={`w-full p-4 rounded-md shadow-md mt-2 ${
                activeTab === 'warehouse2' ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
              onClick={() => setActiveTab('warehouse2')}
            >
              Склад отгрузки (Ленинградская область)
            </button>
            <button
              className={`w-full p-4 rounded-md shadow-md mt-2 ${
                activeTab === 'production' ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
              onClick={() => setActiveTab('production')}
            >
              Производство
            </button>
          </div>
          <div className="p-4 rounded-md bg-gray-100 shadow-md">
            {renderContent()}
          </div>
        </div>

        <div>
          <iframe
            src="https://yandex.com/map-widget/v1/-/CCU0nC70fC"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            className="rounded-md shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
