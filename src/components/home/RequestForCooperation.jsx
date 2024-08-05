import React from "react";
// img
import sorov from "../../imgs/RequestForCooperation/sorov.png";
const RequestForCooperation = () => {
  return (
    <section className="containerb">
      <div className="  flex space-x-10 bg-white items-center h-[516px] relative  rounded-2xl">
        {/* left */}
        <div className="">
          <img className="" src={sorov} alt="" />
        </div>
        {/* right */}
        <form className="w-[506px] ">
          <h2 className="text-40 text-head leading-40 font-semibold mb-5">
            Оставьте заявку на сотрудничество
          </h2>
          <div className=" flex flex-col justify-between space-y-3">
            {/* Имя и Фамилия */}
            <div>
              <input
                required
                className="border border-input w-[506px] py-5 bg-[#ebedf0] px-4 rounded-md placeholder:text-gray  placeholder:font-medium"
                type="text"
                placeholder="Имя и Фамилия"
              />
            </div>

            {/* Номер телефона */}
            <div>
              <input
                required
                className="border border-input w-[506px] py-5 bg-[#ebedf0] px-4 rounded-md placeholder:text-gray  placeholder:font-medium"
                type="tel"
                placeholder="Номер телефона"
              />
            </div>
            {/* Email */}
            <div>
              <input
                required
                className="border border-input w-[506px] py-5 bg-[#ebedf0] px-4 rounded-md placeholder:text-gray  placeholder:font-medium"
                type="email"
                placeholder="Email"
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
        </form>
      </div>
    </section>
  );
};

export default RequestForCooperation;
