import React from 'react';
import { products2 } from '../../data/Data';
import ProductLi from './ProductLi';
import { Link } from 'react-router-dom';
const MeatAndFruit = () => {
  return (
    <section>
        <div className="containerb mb-10">
        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-5'>
            {products2.map((product, index) => (
              <Link>
                <ProductLi 
                  key={index}
                  imageSrc={product.img}
                  title={product.title}
                  description={product.sharx}
                />
              </Link>
            ))}
          </ul>
        </div>
    </section>
  )
}

export default MeatAndFruit