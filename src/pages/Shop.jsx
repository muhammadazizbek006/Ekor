import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import maxsulotyoq from "../imgs/shop/maxsulotyoq.png";
import { deleteUserOfferLinkData } from "../store/slice/productsWishlistDataSlice";
import minus from "../imgs/Production/minus.svg";
import pilus from "../imgs/Production/pilus.svg";
import yuk from "../imgs/shop/yuk.svg";
import thenkyu from "../imgs/shop/Icon.png";
// Sample data for demonstration

const Korzinka = () => {
  const dispatch = useDispatch();
  const tanlanganMahsulotlar = useSelector(
    (store) => store.tanlanganMahsulotlar.data
  );


  const [counts, setCounts] = useState({});


const handleDecrease = (id) => {
  setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 1) - 1, 1), // Ensure count is at least 1
  }));
};

const handleIncrease = (id) => {
  setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 1) + 1, // Default count to 1 if undefined
  }));
};

const totalWeight = tanlanganMahsulotlar.reduce((total, product) => {
  return total + ((counts[product.id] || 0) * product.weight);
}, 0);

const totalPrice = tanlanganMahsulotlar.reduce((total, product) => {
  return total + ((counts[product.id] || 0) * product.price);
}, 0).toFixed(2);

  
  return (
    <section className="py-10 ">
      {tanlanganMahsulotlar.length > 0 ? (
        <div className="containerb ">
          {/* 1 */}
          <div className="flex justify-between mb-6">
            <ul className="bg-white shadow-md rounded-lg py-3 px-2 flex flex-col space-y-3 w-[736px]">
              {tanlanganMahsulotlar.map((e) => (
                <li
                  key={e.id}
                  className="flex justify-between items-center border-b-2 border-input relative pb-4"
                >
                  <div className="flex flex-col lg:flex-row items-center">
                    <div className="flex  items-start">
                      <input type="checkbox" name="" id="" />
                      <div className="mr-4 p-3 rounded-xl">
                        <img className="w-[120px] h-[120px]" src={e.img} alt="" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-head mb-2 max-w-64">
                        {e.nameandinfo}
                      </h3>
                      <div className="flex flex-col space-y-1">
                        <span className="text-sm font-medium text-gray">
                          {e.productiondate}
                        </span>
                        <span className="text-sm font-medium text-gray">
                          {e.price2}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col mb-2.5">
                      <span className="text-base font-semibold mb-0.5 text-head">
                        {e.price2}
                      </span>
                      <span className="text-gray text-xs line-through">
                        {e.price} ₽
                      </span>
                    </div>
                    <div className="flex  justify-between items-center mb-2">
                                    <button onClick={() => handleDecrease(e.id)}>
                                        <img src={minus} alt="minus" />
                                    </button>
                                    <span className="mx-2 text-lg">{counts[e.id] || 1}</span>
                                    <button onClick={() => handleIncrease(e.id)}>
                                        <img src={pilus} alt="plus" />
                                    </button>
                                </div>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <div className="bg-white max-w-[358px] py-3 pl-4 flex border-s-4 rounded-lg  border-head mb-5 ">
                <img className="mr-3" src={yuk} alt="" />
                <p>
                  Минимальная сумма заказа с доставкой на дом — 3 000 ₽.
                  В продуктомат — 1 000 ₽.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="text-2xl font-semibold text-head mb-5">
                  Ваш заказ
                </h3>

                <div>
                  <span className="text-base text-head font-semibold mb-3">
                    Промокод
                  </span>
                  <div className="mb-5">
                    <input
                      className="w-48 py-4 pl-4 bg-foot rounded-lg border border-input mr-4"
                      type="text"
                      placeholder="Введите код"
                    />
                    <button className="text-sm font-semibold text-head bg-sariq p-4 rounded-lg">
                      Применить
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between border-y-2 border-foot py-5 mb-5 ">
                    <p className="text-sm font-medium text-head">
                      Товары (2) – 0,35 кг
                    </p>
                    <span className="text-head text-base font-semibold">
                    {totalWeight}
                    </span>
                  </div>

                  <div className="flex justify-between mb-5">
                    <div>
                      <p className="text-sm font-medium text-head">Итого</p>
                      <p className="text-xs font-medium text-gray">
                        Общая стоимость без учёта доставки
                      </p>
                    </div>
                    <p className="text-head text-base font-semibold">
                    {totalPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className="flex justify-between">
              {/* 2 */} 
              <div className="flex justify-between mb-6">
                {/* Example input fields */}
                <form className="space-y-4 bg-white shadow-md rounded-lg p-5 h-[330px] w-[736px]">
                  <h3 className="text-2xl font-semibold text-head mb-5">
                    Контактные данные
                  </h3>
                  <input
                    type="text"
                    placeholder="Имя и Фамилия"
                    className=" pl-4 border-input  bg-foot py-5 w-[680px] border border-gray-300 rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Номер телефона"
                    className=" pl-4 border-input  bg-foot py-5 w-[680px] border border-gray-300 rounded-md"
                  />
                  {/* Add other input fields as needed */}
                  <button className="bg-sariq py-4  w-[200px] rounded-lg text-head">
                    Отправить код
                  </button>
                </form>

              </div>
              {/* 3 */}
              <div className=" ">
                  <div className="bg-white p-5 h-40 rounded-lg w-[365px]">
                    <h3 className="text-head text-2xl font-semibold mb-5">
                      Информация о заказе
                    </h3>
                    <div>
                      <p className="text-sm font-medium text-gray">
                        Количество товаров в корзине: <span className="text-head">{tanlanganMahsulotlar.length}</span>
                      </p>
                      <p className="text-sm font-medium text-gray">Общий вес заказа:<span className="text-head">{tanlanganMahsulotlar.length}</span></p>
                      <p className="text-sm font-medium text-gray">Общий объем заказа:<span className="text-head">{tanlanganMahsulotlar.length}</span></p>
                    </div>
                  </div>

                </div>

              </div>

        </div>
      ) : (
        <div className="containerb flex flex-col items-center">
          <div className="max-w-[637px] flex flex-col items-center text-center">
            <img
              className="w-20 h-24 object-cover mb-5"
              src={maxsulotyoq}
              alt=""
            />
            <h3 className="text-2xl font-semibold text-head mb-3">
              Пустая корзина
            </h3>
            <p className="text-sm font-semibold text-gray mb-1">
              В вашей корзине пока нет товаров
            </p>
            <p className="text-xs font-medium text-gray mb-5">
              Легко добавляйте в корзину понравившиеся товары, кликнув по кнопке
              «В корзину»
            </p>
            <Link
              to="/katalog/krasofka"
              className=" py-5 w-64 bg-sariq rounded-lg text-head font-semibold text-sm"
            >
              Перейти к покупкам
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Korzinka;
