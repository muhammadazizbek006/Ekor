import React from "react";
import { Select } from "antd";

const onChange = (value) => {
  console.log(`selected ${value}`);
};


const BusinessOffer = () => {
  return (
    <section className="bg-offer ">
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
                  placeholder="Select a person"
                  
                  optionFilterProp="label"
                  onChange={onChange}
                
                  options ={[
                    {
                      value: "Оптовик",
                      label: "Оптовик",
                    },
                    {
                      value: "Оптовик",
                      label: "Оптовик",
                    },
                    {
                      value: "Оптовик",
                      label: "Оптовик",
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
                  placeholder="Select a person"
                  
                  optionFilterProp="label"
                  onChange={onChange}
                
                  options ={[
                    {
                      value: "Оптовик",
                      label: "Оптовик",
                    },
                    {
                      value: "Оптовик",
                      label: "Оптовик",
                    },
                    {
                      value: "Оптовик",
                      label: "Оптовик",
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
                  placeholder="Select a person"
                  
                  optionFilterProp="label"
                  onChange={onChange}
                
                  options ={[
                    {
                      value: "Оптовик",
                      label: "Оптовик",
                    },
                    {
                      value: "Оптовик",
                      label: "Оптовик",
                    },
                    {
                      value: "Оптовик",
                      label: "Оптовик",
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
