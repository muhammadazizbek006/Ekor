import React, { useState } from 'react';

const TabContent = ({ content }) => (
  <div className="p-4 bg-gray-100 rounded-md shadow-md">
    {content}
  </div>
);

const Shop = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' }
  ];

  return (
    <div className="p-6">
      <div className="flex space-x-4 mb-4 border-b border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === index
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <TabContent content={tabs[activeTab].content} />
    </div>
  );
};

export default Shop;
