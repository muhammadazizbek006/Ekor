import React from 'react';

const ProductLi = ({ imageSrc, title, description }) => {
  return (
    <li className=''>
      <div>
        <img src={imageSrc} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default ProductLi;