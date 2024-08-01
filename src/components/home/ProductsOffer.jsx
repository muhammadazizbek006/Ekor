import React from 'react'
import { products } from '../../data/Data'
import ProductLi from './ProductLi'

const ProductsOffer = () => {
  return (
    <>
    {/* ProductsOffer  */}
        <section>
            <div className="containerb">
                <h2 className='text-[40px] font-semibold text-head leading-[40px] max-w-[766px]'>Компания предлагает более 500 наименований рыбной продукции и разнообразных товаров питания</h2>
            
              <ul>
                {
                  products.map((e)=>{
                    return(
                      <ProductLi/>
                    )
                  })
                }
              </ul>
            </div>
        </section>
    </>
  )
}

export default ProductsOffer