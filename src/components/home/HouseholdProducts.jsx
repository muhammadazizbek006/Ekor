import React from 'react';
import { householdproducts } from '../../data/Data';
import ProductLi from './ProductLi';
import { Link } from 'react-router-dom';
const HouseholdProducts = () => {
  return (
    <section>
        <div className="containerb">
        <ul className='grid grid-cols-4  gap-x-5'>
            {householdproducts.map((product, index) => (
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

export default HouseholdProducts