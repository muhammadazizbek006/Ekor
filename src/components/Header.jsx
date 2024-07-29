import React from 'react'
import { Link } from 'react-router-dom'
// imgs
import logo from '../imgs/header/logo.svg'
import telegram from '../imgs/header/telegram.svg'
import whatsapp from '../imgs/header/whatsapp.svg'

// data
import { links } from '../data/Data'

const Header = () => {
  return (
    <section className='py-6'>
        <div className="containerb">
            <ul className='flex justify-between items-center'>
                {/* logo */}
                <li className='mr-2 md:mr-0'>
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                </li>

                {/* nav */}
                <li className='text-head space-x-3 lg:space-x-4 hidden md:inline-block  md:text-xs lg:text-sm font-semibold '>
                    {
                        links.map((e) => (
                            <Link to={e.URL} key={e.id}>{e.title}</Link>
                        ))
                    }
                </li>

                {/* right  */}
                <li className='flex items-center'>
                    {/* left */}
                    <div className='flex items-center mr-3 lg:mr-5'>
                        {/* telegram */}
                        <a className='mr-3' href="https://t.me/Umarov_Dev">
                            <img src={telegram} alt='telegram' />
                        </a>
                        {/* whatsapp */}
                        <a href="https://wa.me/+998914750612">
                            <img src={whatsapp} alt='whatsapp' />
                        </a>
                    </div>
                    {/* right */}
                    <div>
                        <a className='font-bold text-base lg:text-lg text-head' href="">8 (495) 637-82-28</a>
                        <p className='text-gray text-xs font-semibold'>заказать звонок</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Header

