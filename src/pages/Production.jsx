import React, { useState, useEffect } from "react";
import Processing from "../components/Production/Processing";
import { Link } from "react-router-dom";
// data
import { seafood } from "../data/Data";
// img
import like from "../imgs/Production/heart.svg";
import minus from "../imgs/Production/minus.svg";
import pilus from "../imgs/Production/pilus.svg";
import shop from "../imgs/Production/shop.svg";

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
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Production = () => {
  const [open, setOpen] = useState(0);
  const [files, setFiles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  // raschitat
  const [counts, setCounts] = useState(
    seafood.reduce((acc, item) => {
      acc[item.id] = 1; // Har bir mahsulot uchun boshlang'ich miqdor
      return acc;
    }, {})
  );
  

  const handleDecrease = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] > 0 ? prevCounts[id] - 1 : 0,
    }));
  };
  useEffect(() => {
    const Files = [...new Set(seafood.map((e) => e.file))];
    setFiles(Files);
  }, []);

  // Filter the products based on the selected file type
  const filteredProducts = selectedCategory
    ? seafood.filter((item) => item.file === selectedCategory)
    : seafood;
  
  return (
    <>
      <Processing />
      <section>
        <div className="containerb flex">
          {/* left draw filter */}
          <div className="mr-8">
            <div className="mb-12">
              <Accordion
                className="w-[256px] border-2 rounded-md border-[#E6E7EB]"
                open={open === 1}
                icon={<Icon id={1} open={open} />}
              >
                <AccordionHeader className="text-sm font-black" onClick={() => handleOpen(1)}>
                  Категории
                </AccordionHeader>
                <AccordionBody className="flex flex-col items-start space-y-5">
                  {open === 1 &&
                    files.map((file, index) => (
                      <button
                        className="text-sm font-medium"
                        key={index}
                        onClick={() => setSelectedCategory(file)}
                      >
                        {file}
                      </button>
                    ))}
                </AccordionBody>
              </Accordion>
            </div>
          </div>

          {/* right */}
          <ul className="grid grid-cols-3 gap-y-10 gap-x-5">
            {filteredProducts.map((e) => {
              return (
                <li
                  className="relative bg-white rounded-lg p-4 w-[264px] h-[402px] shadow-lg"
                  key={e.id}
                >
                  <button className="absolute top-3 right-3">
                    <img src={like} alt="Like" />
                  </button>

                  <Link to="/" className="block mb-2">
                    <div className="bg-gray-100 p-2 mb-4">
                      <img
                        src={e.img}
                        alt={e.nameandinfo}
                        className="w-full rounded-md"
                      />
                    </div>
                    {/* malumot */}
                    <div className="  ">
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
                    </div>
                  </Link>

                  {/* counter */}
                  <div className="flex items-center justify-between mb-2">
                    <button onClick={() => handleDecrease(e.id)} className="">
                      <img src={minus} alt="minus" />
                    </button>
                    <span className="text-lg">{counts[e.id]} кг</span>
                    <button onClick={() => handleIncrease(e.id)} className="">
                      <img src={pilus} alt="pilus" />
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-head">{e.price} ₽</p>
                      <p className="text-xs text-gray-400 mt-1">{e.price2}</p>
                    </div>

                    <button className="bg-sariq text-white p-3 rounded">
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
