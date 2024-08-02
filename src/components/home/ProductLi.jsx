import React from 'react';

const ProductLi = ({ imageSrc, title, description }) => {
  return (
    <li className=''>
      <div>
        <img className='mb-4 rounded-lg' src={imageSrc} alt={title} />
      </div>
      <h3 className='text-lg font-semibold text-head mb-1 leading-5 '>{title}</h3>
      <p className='text-sm text-head font-medium'>{description}</p>
    </li>
  );
};

export default ProductLi;
