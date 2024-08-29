import React from 'react';
import { householdproducts } from '../../data/Data';
import ProductLi from './ProductLi';
import { Link } from 'react-router-dom';
const HouseholdProducts = () => {
  return (
    <section >
        <div className="containerb mb-10">
        <ul className='grid 524:grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-y-6 lg:gap-y-0  gap-x-5'>
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