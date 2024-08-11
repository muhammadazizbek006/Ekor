import React, { useState } from "react";

const Payment = () => {
  
  const data = [
    { id: "1", tabTitle: "Отсрочка платежа с первой поставки", tabContent: "Tab Content 1" },
    { id: "2", tabTitle: "Любая форма оплаты", tabContent: "Tab Content 2" },
    { id: "3", tabTitle: "История платежей в личном кабинете", tabContent: "Tab Content 3" },
  ];

  const [activeTab, setActiveTab] = useState(data[0].id);

  return (
    <section>

        <div className="containerb">
              <ul className="flex">
                {data.map((tab) => {
                  return (
                    <li
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`p-5 cursor-pointer ${
                        activeTab === tab.id ? "bg-white" : "bg-foot"
                      }`}
                    >
                      {tab.tabTitle}
                    </li>
                  );
                })}
              </ul>

              <div>
                {data.map((tab) => {
                  return (
                    <li
                      key={tab.id}
                      className={`p-5 cursor-pointer ${
                        activeTab === tab.id ? "bg-green-600 p-5" : "hidden"
                      }`}
                    >
                      {tab.tabContent}
                    </li>
                  );
                })}
              </div>

        </div>

  </section>
  );
};

export default Payment;
