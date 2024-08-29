import React from "react";
import { Link } from "react-router-dom";
import { Productsreport } from "../../data/Data";

const ProductsReport = () => {
  return (
    <section className="mb-3">
      <div className="containerb ">

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
          {Productsreport.map((e) => {
            return (
              <li
                key={e.id}
                className="shadow-xl h-auto lg:h-56 pt-5 px-4 lg:px-5 rounded-2xl relative bg-white"
              >
                <Link className="relative flex flex-col justify-between min-h-[205px] overflow-hidden">
                  {/* Top Section */}
                  <div className="max-w-[326px] mb-8">
                    <h3 className="md:text-lg xl:text-2xl font-semibold text-head leading-7 mb-1.5">
                      {e.title}
                    </h3>
                    <p className="text-xs lg:text-sm font-medium text-head leading-[18px] max-w-[176px] sm:max-w-[176px] lg:max-w-[181px]">
                      {e.sharx}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between">
                    {/* Button */}
                    <button className="absolute top-[154px]">
                      <img src={e.btn} alt="button" />
                    </button>

                    {/* Image */}
                    <div className="absolute right-0 z-10 top-16">
                      <img className='' src={e.img} alt="product" />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
};

export default ProductsReport;
