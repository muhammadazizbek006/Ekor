import React from 'react'
// img
import phone from '../../imgs/Subscribe/phone.png'
import whatsapp from '../../imgs/Subscribe/whatsapp.svg'
import telegram from '../../imgs/Subscribe/telegram.svg'
import week from '../../imgs/Subscribe/week.svg'

const Subscribe = () => {
  return (
    <section className='pb-20'>
        <div className="containerb flex relative bg-Subscribe bg-no-repeat  bg-cover py-10 h-[540px] z-50 overflow-hidden">
        {/* left */}
        <div className=' '>
            {/* title and decreption */}
            <div className='mb-24'>
                <h2 className='text-white text-6xl font-semibold leading-54 max-w-[603px] mb-5'>Подписывайтесь на чат-бот оптовых цен</h2>
                <p className='text-lg font-semibold text-white max-w-[322px]'>Узнайте наши цены за пару секунд через наш чат-бот без писем и звонков менеджеру</p>
            </div>
            {/* online */}
            <div >
                <div className='flex space-x-3 mb-5'>
                    <a className='py-4 px-6 bg-yashil flex items-center rounded-lg'  href="">
                        <img className='mr-2' src={whatsapp} alt="whatsapp" />
                        <p className='text-base text-white '>+7 ( _ _ _ ) _ _ _ – _ _ – _ _</p>
                    </a>
                    <a className='py-4 px-6 bg-kok flex items-center rounded-lg' href="">
                        <img className='mr-2' src={telegram} alt="telegram" />
                        <p className='text-base text-white '>Telegram</p>
                    </a>

                    <a className='py-4 px-6 bg-week flex items-center rounded-lg' href="">
                        <img className='mr-2' src={week} alt="week" />
                        <p className='text-base text-white '>ВКонтакте</p>
                    </a>

                </div>
                <div className='flex max-w-[373px] space-x-3 items-start'>
                    <input type="checkbox" />
                    <p className='text-xs font-medium text-white'>Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности ресурса</p>
                </div>
            </div>
        </div>
        {/* right */}
        <div className='absolute -right-56  top-2 z-0 '>
            <img className='' src={phone} alt="" />
        </div>
        </div>
    </section>
  )
}

export default Subscribe