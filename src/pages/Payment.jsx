import React, { useState } from 'react';

const Payment = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Отсрочка платежа с первой поставки', 'Любая форма оплаты', 'История платежей в личном кабинете'];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Оплата</h1>
      <div className="bg-white shadow-md rounded-lg">
        <div className="flex border-b">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`flex-1 text-center py-4 ${
                activeTab === index
                  ? 'border-b-4 border-blue-700 text-blue-700'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-6">
          {activeTab === 0 && (
            <div>
              {/* Первый таб контент */}
              <h2 className="text-2xl font-bold mb-4">Отправьте заявку на отсрочку платежа</h2>
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <input className="p-3 border rounded-md" type="text" placeholder="Название компании" />
                  <input className="p-3 border rounded-md" type="text" placeholder="Ваше имя" />
                  <input className="p-3 border rounded-md" type="text" placeholder="ИНН" />
                  <input className="p-3 border rounded-md" type="text" placeholder="Email" />
                  <input className="p-3 border rounded-md col-span-2" type="text" placeholder="Номер телефона" />
                </div>
                <div className="mt-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Подтверждаю своё согласие на обработку и хранение моих персональных данных.
                  </label>
                </div>
                <button className="mt-4 bg-yellow-400 text-white py-2 px-6 rounded-md">Отправить</button>
              </form>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              {/* Второй таб контент */}
              <h2 className="text-2xl font-bold mb-4">Любая форма оплаты</h2>
              <img src="/mnt/data/Skrinshot 2024-08-10 174459.png" alt="Payment Invoice" className="w-full" />
            </div>
          )}
          {activeTab === 2 && (
            <div>
              {/* Третий таб контент */}
              <h2 className="text-2xl font-bold mb-4">История платежей в личном кабинете</h2>
              <p>История ваших платежей будет отображаться здесь.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
