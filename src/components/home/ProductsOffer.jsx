import React from 'react';
import { products } from '../../data/Data';
import ProductLi from './ProductLi';
import { Link } from 'react-router-dom';

const ProductsOffer = () => {
  return (
    <>
      <section className='pt-20'>
        <div className="containerb mb-10">
          <h2 className=' text-xl md:text-3xl lg:text-[40px] font-semibold text-head leading-[40px] max-w-[766px] mb-10'>
            Компания предлагает более 500 наименований рыбной продукции и разнообразных товаров питания
          </h2>
          
          <ul className='grid 524:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-5'>
            {products.map((product, index) => (
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
    </>
  );
};

export default ProductsOffer;
