import React from "react";
import { Link } from "react-router-dom";
// img
import logo from "../imgs/footer/logo.svg";
import telegram from "../imgs/footer/telegram.svg";
import whatsapp from "../imgs/footer/whatsapp.svg";

const Footer = () => {
  return (
    <section className="bg-head py-14">
      <ul className="containerb flex justify-between">
        {/* left logo */}
        <li className="space-y-8">
          {/* logo */}
          <div className="flex space-x-4">
            <Link>
              <img src={logo} alt="" />
            </Link>
            <p className="text-xs font-medium text-white">
              Поставки продуктов питания оптом <br /> для ресторанов, маркетов,
              оптовиков{" "}
            </p>
          </div>
          {/* adres */}
          <address className="text-base font-normal text-white">
            Адрес: г. Москва, Открытое шоссе, 13, стр. 1
          </address>
          {/* email */}
          <div className="text-base font-normal text-white">
            <span>E-mail: </span>
            <a href="email:info@ekorfish.ru">info@ekorfish.ru</a>
          </div>
          {/* number */}
          <div>
            <a
              className="text-2xl  font-bold text-white"
              href="tel:+7 (495) 637-82-28"
            >
              +7 (495) 637-82-28
            </a>
          </div>
          {/* online */}
          <div className="flex space-x-2">
            <a href="">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
        </li>
        {/* xaridorlar uchun */}
        <li>
          <h3 className="text-base text-foot font-medium mb-6">Покупателям</h3>
          {/* links */}
          <div className="text-base font-medium text-white flex flex-col space-y-4">
            <Link>Прайс</Link>
            <Link>Доставка</Link>
            <Link>Чат-бот</Link>
            <Link>Производство</Link>
            <Link>Контакты</Link>
          </div>
        </li>

        {/* Каталог */}
        <li>
          <h3 className="text-base text-foot font-medium mb-6">Каталог</h3>
          <div className="flex space-x-8">
            {/* links */}
            <div className="text-base font-medium text-white flex flex-col space-y-4">
              <Link>Свежемороженая рыба</Link>
              <Link>Филе рыбы, стейки, фарш</Link>
              <Link>Морепродукты</Link>
              <Link>Фасованная рыба Экор</Link>
              <Link>Полуфабрикаты</Link>
            </div>
            {/* links */}
            <div className="text-base font-medium text-white flex flex-col space-y-4">
              <Link>Готовая продукция Экор</Link>
              <Link>Мясо, птица</Link>
              <Link>Замороженные продукты</Link>
              <Link>Консервы</Link>
              <Link>Продукты питания оптом</Link>
              <Link>Карта сайта</Link>
            </div>
          </div>
        </li>

        {/* Готовая продукция Экор */}
        <li></li>
      </ul>
    </section>
  );
};

export default Footer;
