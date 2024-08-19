import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import maxsulotyoq from "../imgs/shop/maxsulotyoq.png";
import { deleteUserOfferLinkData } from "../store/slice/productsWishlistDataSlice";
import minus from "../imgs/Production/minus.svg";
import pilus from "../imgs/Production/pilus.svg";
import yuk from "../imgs/shop/yuk.svg";
import thenkyu from '../imgs/shop/Icon.png'
// Sample data for demonstration

const Korzinka = () => {
  const dispatch = useDispatch();
  const tanlanganMahsulotlar = useSelector(
    (store) => store.tanlanganMahsulotlar.data
  );

  const [step, setStep] = useState(1);

  const initialCounts = tanlanganMahsulotlar.reduce((acc, product) => {
    acc[product.id] = 1; // Har bir mahsulot uchun boshlang'ich sanash qiymati
    return acc;
  }, {});

  const [counts, setCounts] = useState(initialCounts);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = tanlanganMahsulotlar.reduce((acc, product) => {
      return acc + product.narxi * counts[product.id];
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [counts, tanlanganMahsulotlar]);

  const increment = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const handleNextStep = () => {
    if (step === 1 && Object.keys(counts).length > 0) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
  };

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    } else if (step === 4) {
      setStep(3);
    }
  };

  return (
    <section className="py-10 ">
      {tanlanganMahsulotlar.length > 0 ? (
        <div className="containerb ">
          {/* Step Navigation */}
          <div className="flex justify-between mb-8 gap-4">
            {[1, 2, 3, 4].map((s) => (
              <button
                key={s}
                className={`flex flex-col items-center py-2 px-4 rounded-md ${
                  step === s ? "bg-white text-black" : "bg-gray-300 text-black"
                } ${
                  s > step ? "cursor-not-allowed" : "border border-gray-400"
                }`}
                onClick={() => s <= step && setStep(s)}
                disabled={s > step}
                style={{ flex: 1 }}
              >
                <div className="text-lg font-bold">{s}</div>
                <div className="text-sm">Корзина {s}</div>
              </button>
            ))}
          </div>

          {/* Step Content */}
          {step === 1 && (
            <div className="flex justify-between">
              <ul className="bg-white shadow-md rounded-lg py-3 px-2 flex flex-col space-y-3 w-[736px]">
                {tanlanganMahsulotlar.map((e) => (
                  <li
                    key={e.id}
                    className="flex justify-between items-center border-b-2 border-input relative pb-4"
                  >
                    <div className="flex flex-col lg:flex-row items-center">
                      <div className="mr-4 p-3 rounded-xl">
                        <img
                          className="w-[120px] h-[120px]"
                          src={e.img}
                          alt=""
                        />
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
                      <div className="flex items-center space-x-5 border-2 border-input p-3 rounded-xl">
                        <button onClick={() => decrement(e.id)} className="">
                          <img src={minus} alt="" />
                        </button>
                        <span className="mx-2 text-sm font-medium text-head">
                          {counts[e.id]} шт
                        </span>
                        <button onClick={() => increment(e.id)} className="">
                          <img src={pilus} alt="" />
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
                        {" "}
                        {totalPrice} ₽{" "}
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
                        169,00 ₽{" "}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleNextStep}
                    className="text-head  text-sm font-semibold flex flex-col items-center bg-sariq py-4 w-full rounded-lg"
                    disabled={Object.keys(counts).length === 0}
                  >
                    Оформить заказ
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex justify-between">
              {/* Example input fields */}
              <form className="space-y-4 bg-white p-5 rounded-lg h-[330px] w-[736px]">
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
                        {" "}
                        169,00 ₽{" "}
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
                        169,00 ₽{" "}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleNextStep}
                    className="text-head  text-sm font-semibold flex flex-col items-center bg-sariq py-4 w-full rounded-lg"
                    disabled={Object.keys(counts).length === 0}
                  >
                    Перейти к оплате
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex justify-between">
              <div className="bg-white p-5 w-[736px] h-40 rounded-lg">
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
                        {" "}
                        169,00 ₽{" "}
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
                        169,00 ₽{" "}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleNextStep}
                    className="text-head  text-sm font-semibold flex flex-col items-center bg-sariq py-4 w-full rounded-lg"
                    disabled={Object.keys(counts).length === 0}
                  >
                    Перейти к оплате
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="containerb flex flex-col items-center">
            <div className="max-w-[637px] flex flex-col items-center text-center">
              <img
                className="w-20 h-24 object-cover mb-5"
                src={thenkyu}
                alt=""
              />
              <h3 className="text-2xl font-semibold text-head mb-3">
              Спасибо!
              </h3>

              <p className="text-xs font-medium text-gray mb-5">
              Ваш платеж успешно обработан. Ожидайте <br /> скорую доставку и свяжитесь с нами, если у вас <br /> есть какие-либо вопросы. Спасибо за покупку!
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
