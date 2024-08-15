import React from 'react'
// img
import phone from '../../imgs/Subscribe/phone.png'
import whatsapp from '../../imgs/Subscribe/whatsapp.svg'
import telegram from '../../imgs/Subscribe/telegram.svg'
import week from '../../imgs/Subscribe/week.svg'
const Subscribetwo = () => {
  return (
    <section className='py-10'>
    <div className="containerb flex relative bg-Subscribe bg-no-repeat  bg-cover py-5 h-[318px] z-50 overflow-hidden rounded-lg">
    {/* left */}
    <div className=' '>
        {/* title and decreption */}
        <div className='mb-10'>
            <h2 className='text-white text-40 font-semibold leading-40 max-w-[603px] mb-5'>Подписывайтесь на чат-бот оптовых цен</h2>
            <p className='text-sm font-medium text-white max-w-[378px]'>Узнайте наши цены за пару секунд через наш чат-бот без писем и звонков менеджеру</p>
        </div>
        {/* online */}
        <div >
            <div className='flex space-x-3 mb-5'>
                <a className='py-4 px-6 bg-yashil flex items-center rounded-lg'  href="">
                    <img className='mr-2' src={whatsapp} alt="whatsapp" />
                    <p className='text-base text-white '>WhatsApp</p>
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
    <div className='absolute -right-24  top-8 z-0 '>
        <img className='w-[464px]' src={phone} alt="" />
    </div>
    </div>
</section>
  )
}

export default Subscribetwo