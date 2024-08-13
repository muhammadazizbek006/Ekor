import React from "react";
import Processing from "../components/Production/Processing";
import arrow from "../imgs/Production/arrow.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
// data
import { seafood } from "../data/Data";
// img
import like from "../imgs/Production/heart.svg";
import minus from "../imgs/Production/minus.svg";
import pilus from "../imgs/Production/pilus.svg";

// material tailwind
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

import shop from "../imgs/Production/shop.svg";
const Production = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <Processing />
      <section>
        <div className="containerb flex justify-between">
          {/* left */}
          <div className="flex flex-col justify-start items-start space-y-5">
            {seafood.map((quiz, id) => {
              return (
                <Accordion
                  icon={
                    <img
                      src={arrow}
                      className={`transition-transform duration-200 w-8  h-8 ${
                        open == id ? "rotate-0" : "rotate-180"
                      }`}
                    />
                  }
                  className="border  bg-white overflow-hidden border-x-0 border-y-2 border-header border-dashed"
                  key={id}
                  open={open === id}
                >
                  <AccordionHeader
                    className={` text-base md:text-xl px-4  items-start ${
                      open == quiz.id ? "rounded-b-none" : ""
                    }`}
                    onClick={() => handleOpen(id)}
                  >
                    <div className="flex items-center space-x-2">
                      {quiz.savol}
                    </div>
                  </AccordionHeader>
                  <AccordionBody className="px-4 javob flex items-start ">
                    {quiz.javob}
                  </AccordionBody>
                </Accordion>
              );
            })}
          </div>
          {/* right  */}
          <ul className="grid grid-cols-3 gap-x-5 gap-y-10">
            {seafood.map((e) => {
              return (
                <li
                  className="relative bg-white rounded-lg p-4 w-72 shadow-lg"
                  key={e.id}
                >
                  <button className="absolute top-3 right-3">
                    <img src={like} alt="Like" />
                  </button>

                  <Link to="/" className="block">
                    <div className="bg-gray-100 p-2 mb-4">
                      <img
                        src={e.img}
                        alt={e.nameandinfo}
                        className="w-full rounded-md"
                      />
                    </div>

                    <h3 className="text-base text-head font-semibold mb-2">
                      {e.nameandinfo}
                    </h3>

                    <div className="flex justify-between text-gray-500 text-sm">
                      <div>
                        <p className="text-gray font-medium text-xs">
                          Дата выработки:
                        </p>
                        <p className="text-head font-medium text-xs">
                          {e.productiondate}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray font-medium text-xs">
                          Срок годности:
                        </p>
                        <p className="text-head font-medium text-xs">
                          {e.Bestbeforedate}
                        </p>
                      </div>
                    </div>
                  </Link>
                  {/* counter */}
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      onClick={handleDecrease}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                    >
                      <img src={minus} alt="minus" />
                    </button>
                    <span className="text-lg">{count}</span>
                    <button
                      onClick={handleIncrease}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                    >
                      <img src={pilus} alt="pilus" />
                    </button>
                  </div>

                  <div className=" flex justify-between items-center">
                    
                    <div>
                      <p className="text-2xl  font-semibold text-head">{e.price} ₽</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {e.price2} 
                      </p>
                    </div>
                    <button className="bg-sariq text-white p-3  rounded">
                      <img src={shop} alt="Add to Cart" />
                    </button>
                  </div>

                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Production;
