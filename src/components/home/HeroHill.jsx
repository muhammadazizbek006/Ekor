import React from 'react'
import { Link } from 'react-router-dom'
// img
import katalog from '../../imgs/herohill/katalog.svg'
import shop from '../../imgs/herohill/shop.svg'
import like from '../../imgs/herohill/like.svg'
import search from '../../imgs/herohill/search.svg'
import kirish from '../../imgs/herohill/kirish.svg'
// redux

import { addProductToWishlist } from '../../store/slice/productsWishlistDataSlice'
import { useSelector } from "react-redux";
import { seafood } from '../../data/Data'

const HeroHill = () => {
// tanlangan maxsulotlarni qo'shish
  const tanlanganMahsulotlar = useSelector(
    (store) => store.tanlanganMahsulotlar.data
  );
  // like boilganlarni qo'shish
  const productliked = useSelector(
    (store) => store.likemaxsulotlar.data
  );
  // narx

  const totalPrice = tanlanganMahsulotlar.reduce((total, product) => total + product.price, 0);

  return (
    <section className='bg-head py-3 hidden md:block mb-5'>
      <ul className='containerb flex justify-between items-center'>
        {/* katalog va input */}
        
        <li>
          {/* left katalog */}
          <div className='flex items-center '>
            <button className='flex items-center mr-7'>
              <img className='mr-3' src={katalog} alt="katalog" />
              <p className='text-base font-semibold text-white'>Каталог товаров</p>
            </button>
            {/* input */}
            <div className='flex items-center relative'>
              <img className='absolute left-3' src={search} alt="search" />
              <input className='py-3 pl-3 w-[375px] rounded-lg placeholder:pl-8 placeholder:text-sm placeholder:font-medium placeholder:text-gray' type="search" placeholder='Поиск ' />
            </div>

          </div>
        </li>

        {/* like shop va kirish */}
        <li className='flex items-center'>
          {/* like */}
          <Link  className='flex items-center lg:mr-10'>
            <div className='relative mr-4'>
              <img src={like} alt="" />
              <span className='bg-sariq px-1.5 absolute rounded-full top-0 left-4  text-[10px] font-semibold text-head'>{productliked.length}</span>
            </div>
            <p className='text-base font-semibold text-white hidden lg:block'>Избранное</p>
          </Link>
    
         {/* shop */}
          <Link to='/shop' className='flex items-center mr-3 lg:mr-10'>
            <div  className='relative mr-4'>
              <img src={shop} alt="" />
              <span className='bg-sariq px-1.5 absolute rounded-full top-0 left-4  text-[10px] font-semibold text-head'>{tanlanganMahsulotlar.length}</span>
            </div>
            <p className='text-base font-semibold text-white hidden lg:block'>{totalPrice.toFixed(2)}</p>
          </Link>

          <div >
            <Link className='flex items-center'>
              <img className=' mr-2 lg:mr-4' src={kirish} alt="kirish" />
              <p className='text-base font-semibold text-white'>Вход</p>
            </Link>
          </div>
        </li>
        
      </ul>
    </section>
  )
}

export default HeroHill