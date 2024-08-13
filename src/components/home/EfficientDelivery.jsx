import React, { useState } from 'react';

const EfficientDelivery = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <section>
      <div className="containerb">
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handleDecrease}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            -
          </button>
          <span className="text-lg">{count}</span>
          <button
            onClick={handleIncrease}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
};

export default EfficientDelivery;
