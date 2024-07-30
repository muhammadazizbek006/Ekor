// links
export const links = [
    {
        id:1,
        title:`Доставка`,
        URL:'/Доставка',
    },
    {
        id:2,
        title:`Прайс`,
        URL:'/Прайс',
    },
    {
        id:3,
        title:`Производство`,
        URL:'/Производство',
    },
    {
        id:4,
        title:`Оплата`,
        URL:'/Оплата',
    },
    {
        id:5,
        title:`Контакты`,
        URL:'/Контакты',
    },
    {
        id:6,
        title:`О компании `,
        URL:'/О компании ',
    },
]

// hero
import img1 from '../imgs/hero/img1.png'
import img2 from '../imgs/hero/img2.png'
import img3 from '../imgs/hero/img3.png'
import bg1 from '../imgs/hero/bg1.png'
import bg2 from '../imgs/hero/bg2.png'
import bg3 from '../imgs/hero/bg3.png'

export const Carusel = [
    {
        id:1,
        bg:bg1,
        class:'max-w-[600px]',
        top:'top-3',
        rounded:'rounded-[33px]',
        title:'> 1000 наименований продуктов питания оптом',
        eslatma:'для HoReCa, общепита, производителей',
        img:img1
    },
    {
        id:2,
        bg:bg2,
        class:'max-w-[745px]',
        class2:'w-[390px]',
        title:'Собственное производство по переработке рыбы и морепродуктов',
        eslatma:'Работайте с производителем напрямую',
        img:img2
    },
    {
        id:3,
        bg:bg3,
        class:'max-w-[573px]',
        title:'Специализируемся на поставках рыбы и морепродуктов со всего мира',
        eslatma:'для HoReCa, магазины «У дома», торговые сети',
        img:img3
    }
]


// products report
import telefon from '../imgs/productsreport/telefon.svg'
import whatsapp from '../imgs/productsreport/whatsapp.svg'
import ikra from '../imgs/productsreport/ikra.svg'
import mashina from '../imgs/productsreport/mashina.svg'

export const ProductsReport = [
    {
        id:1,
        title:`Чат-бот цен на все наши продукты питания`,
        sharx:`Узнайте наши цены за пару секунд без писем и звонков менеджеру`,
        img:telefon,
        btn:whatsapp,
    },
    {
        id:2,
        title:`Лосось охлажденный`,
        sharx:`Акционная цена 1700 ₽ / кг`,
        img:ikra,
        btn:`до 31.12.2023 г.`,
    },
    {
        id:3,
        title:`Доставка в день заказа`,
        sharx:`Закажите до 11.00`,
        img:mashina    
    }
]