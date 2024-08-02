import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useSelector } from "react-redux";
import { Select } from "antd";

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const BusinessOffer = () => {
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");

  const [QabulQilishUsuli, setQabulQilishUsuli] = useState("");
  const [ishadress, setishadress] = useState("");
  const [xaridxajmi, setxaridxajmi] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePhone = (event) => {
    setphone(event.target.value);
  };
  const handleoblast = (event) => {
    setQabulQilishUsuli(event.target.value);
  };
  const handlexaridxajmi = (event) => {
    setxaridxajmi(event.target.value);
  };
  const handleemail = (event) => {
    setemail(event.target.value);
  };
  const handleadress = (event) => {
    setishadress(event.target.value);
  };

  const handleSubmitInput = (event) => {
    event.preventDefault();
    if (
      name === "" ||
      qabul === "" ||
      phone === "" ||
      xaridxajmi === "" ||
      email === "" ||
      ishadress === ""
    ) {
      alert("Iltimos malumotni to'ldiring");
    } else {
      const telegram_bot_id = "7474706019:AAHwOjFku-IDBC6KcJXtL1XL4gIzRg4eTRk";
      const chat_id = "6932003276";

      const telegramMessage = `Name: ${name}\noblast: ${oblast}\nPhone Number : ${phone}\nxaridxajmi: ${xaridxajmi}\nemail: ${email}\nishadress: ${ishadress}`;

      axios
        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          setName("");
          setoblast("");
          setphone("");
          setxaridxajmi("");
          setemail("");
          setishadress("");
        });
      alert("Malumot yuborildi");
    }
  };
  return (
    <section className="bg-offer bg-no-repeat  bg-cover pt-16 pb-28 ">
      <div className="containerb">
        <h2 className="text-40 font-semibold text-white text-center mb-10 leading-40">
          Получите индивидуальное коммерческое предложение для вашего бизнеса
        </h2>
        {/* form */}
        <form
          onSubmit={handleSubmitInput}
          className="bg-white p-10 rounded-[20px] flex   justify-between"
        >
          {/* select */}
          <div className="space-y-5 mr-5">
            {/* Ваша ниша */}
            <div className="flex items-center">
              <span className="bg-head   text-white rounded-full mr-4 px-5 py-3 ">
                1
              </span>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-head">
                  Ваша ниша
                </label>

                <Select
                  className=" w-[444px] rounded-lg "
                  showSearch
                  placeholder="Оптовик"
                  onChange={onChange}
                  options={[
                    {
                      value: "Оптовик",
                      label: "Оптовик",
                    },
                    {
                      value: "Розничная торговля",
                      label: "Розничная торговля",
                    },
                    {
                      value: "Дистрибьютор",
                      label: "Дистрибьютор",
                    },
                    {
                      value: "Поставщик",
                      label: "Поставщик",
                    },
                    {
                      value: "Производитель",
                      label: "Производитель",
                    },
                  ]}
                />
              </div>
            </div>

            {/* Способ получения*/}
            <div className="flex items-center">
              <span className="bg-head   text-white rounded-full mr-4 px-5 py-3 ">
                2
              </span>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-head">
                  Способ получения
                </label>
                <Select
                  className=" w-[444px] rounded-lg "
                  showSearch
                  placeholder="Доставка по МСК или МО"
                  optionFilterProp="label"
                  onChange={onChange}
                  options={[
                    {
                      value: "Курьерская доставка",
                      label: "Курьерская доставка",
                    },
                    {
                      value: "Самовывоз",
                      label: "Самовывоз",
                    },
                    {
                      value: "Доставка на почту",
                      label: "Доставка на почту",
                    },
                    {
                      value: "Доставка до двери",
                      label: "Доставка до двери",
                    },
                    {
                      value: "Пункты выдачи",
                      label: "Пункты выдачи",
                    },
                  ]}
                />
              </div>
            </div>

            {/* Ваши объемы закупки */}
            <div className="flex items-center">
              <span className="bg-head   text-white rounded-full mr-4 px-5 py-3 ">
                3
              </span>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-head">
                  Ваши объемы закупки
                </label>
                <Select
                  className=" w-[444px] rounded-lg "
                  showSearch
                  placeholder="от 10 000 ₽ до 25 000 ₽ "
                  optionFilterProp="label"
                  onChange={onChange}
                  options={[
                    {
                      value: "от 25 000 ₽ до 50 000 ₽",
                      label: "от 25 000 ₽ до 50 000 ₽",
                    },
                    {
                      value: "от 50 000 ₽ до 100 000 ₽",
                      label: "от 50 000 ₽ до 100 000 ₽",
                    },
                    {
                      value: "более 100 000 ₽",
                      label: "более 100 000 ₽",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          {/* Контактные данные */}
          <div>
            <h3 className="text-head text-2xl font-semibold mb-3">
              Контактные данные
            </h3>
            {/* inputs */}
            <div className=" flex flex-col justify-between space-y-3">
              {/* Имя и Фамилия */}
              <div>
                <label className="mb-2 text-sm font-medium text-head">
                  Имя и Фамилия
                </label>
                <input
                  onChange={handleName}
                  value={name}
                  required
                  className="border border-input w-[490px] py-0.5 px-4 rounded-md  placeholder:font-light"
                  type="text"
                  placeholder="Имя и Фамилия"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 text-sm font-medium text-head">
                  Email
                </label>
                <input
                  onChange={handleemail}
                  value={email}
                  required
                  className="border border-input w-[490px] py-0.5 px-4 rounded-md  placeholder:font-light"
                  type="email"
                  placeholder="Email"
                />
              </div>

              {/* Номер телефона */}
              <div>
                <label className="mb-2 text-sm font-medium text-head">
                  Номер телефона
                </label>
                <input
                  onChange={handlePhone}
                  value={phone}
                  required
                  className="border border-input w-[490px] py-0.5 px-4 rounded-md  placeholder:font-light"
                  type="tel"
                  placeholder="Номер телефона"
                />
              </div>
              {/* checkbox and btn */}
              <div className="flex flex-col">
                <div className="flex items-start mb-8">
                  <input className="mr-3 w-5 h-6" type="checkbox" />
                  <p className="text-xs font-medium text-gray">
                    Подтверждаю своё согласие на обработку и хранение моих
                    персональных данных в соответствии с пользовательским
                    соглашением
                  </p>
                </div>
                <button className="bg-sariq py-3 textsm font-semibold rounded-lg text-head">
                  Получить
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BusinessOffer;
