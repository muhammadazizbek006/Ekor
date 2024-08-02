import React from "react";
import { Select } from "antd";

const onChange = (value) => {
  console.log(`selected ${value}`);
};


const BusinessOffer = () => {
  return (
    <section className="bg-offer bg-no-repeat  bg-cover pt-16 pb-28 ">
      <div className="containerb">
        <h2 className="text-40 font-semibold text-white text-center mb-10 leading-40">
          Получите индивидуальное коммерческое предложение для вашего бизнеса
        </h2>
        {/* form */}
        <form className="bg-white p-10 rounded-[20px]">
          {/* select */}
          <div className="space-y-3">
            {/* Ваша ниша */}
            <div className="flex">
              {/* <span className='bg-head   text-white rounded-full mr-4 '>1</span> */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-head">
                  Ваша ниша
                </label>
                <Select
                className=" w-[444px] rounded-lg "
                  showSearch
                  placeholder="Оптовик"
                  
                  
                  onChange={onChange}
                
                  options ={[
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
            <div className="flex">
              {/* <span className='bg-head   text-white rounded-full mr-4 '>1</span> */}
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
                
                  options ={[
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
            <div className="flex">
              {/* <span className='bg-head   text-white rounded-full mr-4 '>1</span> */}
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
                
                  options ={[
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
        </form>
      </div>
    </section>
  );
};

export default BusinessOffer;
