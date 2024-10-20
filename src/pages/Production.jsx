import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Processing from "../components/Production/Processing";
import { Link } from "react-router-dom";
// data
import { seafood } from "../data/Data";
// img
import like from "../imgs/Production/heart.svg";
import minus from "../imgs/Production/minus.svg";
import pilus from "../imgs/Production/pilus.svg";
import shop from "../imgs/Production/shop.svg";
import steyk from "../imgs/acardion/file.svg";
import likeactive from "../imgs/Production/likeactive.svg";
import finished from '../imgs/acardion/finished.svg'
import xamr from '../imgs/acardion/xamr.svg'

// material tailwind
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Subscribetwo from "../components/Production/Subscribetwo";

import { addProductToWishlist } from "../store/slice/productsWishlistDataSlice";
import { addProductToLike } from "../store/slice/laykSlice";


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

const Production = () => {
  const [open, setOpen] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [files, setFiles] = useState([]);


  useEffect(() => {
    if (open === 2) {
      const finishedProducts = seafood.filter((item) => item.type === "finishedproducts");
      const uniqueFiles = [...new Set(finishedProducts.map((item) => item.file))];
      setFiles(uniqueFiles);

      if (selectedCategory) {
        const filteredByFile = finishedProducts.filter((item) => item.file === selectedCategory);
        setFilteredProducts(filteredByFile);
      } else {
        setFilteredProducts(finishedProducts);
      }
    } else if (open === 3) {
      // Filter for Dough products
      const DoughProducts = seafood.filter((item) => item.type === "Dough products");
      const Dough = [...new Set(DoughProducts.map((item) => item.nameandinfo))];
      setFiles(Dough);

      if (selectedCategory) {
        const filteredByDough = DoughProducts.filter((item) => item.nameandinfo === selectedCategory);
        setFilteredProducts(filteredByDough);
      } else {
        setFilteredProducts(DoughProducts);
      }
    } else if (open === 1) {
      // Filter products for rawfish
      const rawfishProducts = seafood.filter((item) =>
        item.type === "rawfish" && (selectedCategory ? item.file === selectedCategory : true)
      );
      setFilteredProducts(rawfishProducts);
    }
  }, [open, selectedCategory]);





  
  const handleOpen = (id) => {
    setOpen(id);
  };

  const dispatch = useDispatch();

  const tanlanganMahsulotlar = useSelector(
    (store) => store.tanlanganMahsulotlar.data
  );

  const initialCounts = tanlanganMahsulotlar.reduce((acc, product) => {
    acc[product.id] = 1; // Har bir mahsulot uchun boshlang'ich sanash qiymati
    return acc;
  }, {});








  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (product) => {
    const updatedLikedProducts = {
      ...likedProducts,
      [product.id]: !likedProducts[product.id],
    };
    setLikedProducts(updatedLikedProducts);
    dispatch(addProductToLike(product));
  };





  const mahsulotniWishlistgaQoshish = (product) => {
    dispatch(addProductToWishlist(product));
  };

  // narx
  const [counts, setCounts] = useState(initialCounts);

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

const totalWeight = filteredProducts.reduce((total, product) => {
  const count = counts[product.id] || 0;
  return total + (count * product.weight);
}, 0);

const totalPrice = filteredProducts.reduce((total, product) => {
  const count = counts[product.id] || 0;
  return total + (count * product.price);
}, 0);

  
  return (
    <>
      <Processing />
      <section>
        <div className="containerb flex">
          {/* left draw filter */}
          <div className="mr-8">
            {/* file fish */}
            <div className="mb-3">
              <Accordion
                className="w-[256px] "
                open={open === 1}
                icon={<Icon id={1} open={open} />}
              >
                <AccordionHeader
                  className="flex items-center bg-white rounded-lg p-4 mb-2"
                  onClick={() => handleOpen(1)}
                >
                  <div className="flex items-start">
                    <img src={steyk} alt="steyk" className=" mr-2" />
                    <p className="text-sm font-semibold text-head leading-4">
                      Филе рыбы, <br /> стейки, фарш
                    </p>
                  </div>
                </AccordionHeader>

                <AccordionBody className="flex flex-col items-start space-y-5">
                  {open === 1 &&
                    files.map((file, index) => (
                      <button
                        className={`text-sm py-2 w-[250px] rounded-lg pl-4 text-start text-head font-medium ${
                          selectedCategory === file
                            ? "bg-foot"
                            : "bg-transparent"
                        }`}
                        key={index}
                        onClick={() => setSelectedCategory(file)}
                      >
                        {file}
                      </button>
                    ))}
                </AccordionBody>
              </Accordion>
            </div>
            {/* file fnished products */}
            <div className="mb-3">
              <Accordion
                className="w-[256px] "
                open={open === 2}
                icon={<Icon id={2} open={open} />}
              >
                <AccordionHeader
                  className="flex items-center bg-white rounded-lg p-4 mb-2"
                  onClick={() => handleOpen(2)}
                >
                  <div className="flex items-start">
                    <img src={finished} alt="finished" className=" mr-2" />
                    <p className="text-sm font-semibold text-head leading-4">
                    Готовая продукция <br /> «Экор» 
                    </p>
                  </div>
                </AccordionHeader>

                <AccordionBody className="flex flex-col items-start space-y-5">
                  {open === 2 &&
                    files.map((file, index) => (
                      <button
                        className={`text-sm py-2 w-[250px] rounded-lg pl-4 text-start text-head font-medium ${
                          selectedCategory === file
                            ? "bg-foot"
                            : "bg-transparent"
                        }`}
                        key={index}
                        onClick={() => setSelectedCategory(file)}
                      >
                        {file}
                      </button>
                    ))}
                </AccordionBody>
              </Accordion>
            </div>
        {/* file fish */}
           <div className="mb-3">
              <Accordion
                className="w-[256px] "
                open={open === 3}
                icon={<Icon id={3} open={open} />}
              >
                <AccordionHeader
                  className="flex items-center bg-white rounded-lg p-4 mb-2"
                  onClick={() => handleOpen(3)}
                >
                  <div className="flex items-start">
                    <img src={xamr} alt="xamr" className=" mr-2" />
                    <p className="text-sm font-semibold text-head leading-4">
                      Изделия из теста
                    </p>
                  </div>
                </AccordionHeader>

                <AccordionBody className="flex flex-col items-start space-y-5">
                  {open === 3 &&
                    files.map((nameandinfo, index) => (
                      <button
                        className={`text-sm py-2 w-[250px] rounded-lg pl-4 text-start text-head font-medium ${
                          selectedCategory === nameandinfo
                            ? "bg-foot"
                            : "bg-transparent"
                        }`}
                        key={index}
                        onClick={() => setSelectedCategory(nameandinfo)}
                      >
                        {nameandinfo}
                      </button>
                    ))}
                </AccordionBody>
              </Accordion>
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col">
            <div className="flex items-center mb-5">
              <h3 className="text-[32px] font-semibold text-head mr-3">
                Филе рыбы, стейки, фарш
              </h3>
              <span className="text-sm font-medium text-gray ">
                {seafood.length} товара
              </span>
            </div>

            <div className="mb-16"> 
              <ul className="grid grid-cols-3 gap-y-10 gap-x-5">
                {filteredProducts.slice(0, 6).map((e) => {
                  return (
                    <li
                      className="relative flex flex-col justify-between bg-white rounded-lg pt-3 pb-1 px-4 w-[264px] h-[404px] shadow-lg"
                      key={e.id}
                    >
                      <button
                        onClick={() => toggleLike(e)}
                        className="absolute top-2 right-3"
                      >
                        <img
                          src={likedProducts[e.id] ? likeactive : like}
                          alt="Like"
                        />
                      </button>

                      <Link to={`/production/${e.id}`} className="block mb-2 ">
                        <div className="flex flex-col items-center mb-4 w-[200px] h-[185px]">
                          <img
                            src={e.img}
                            alt={e.nameandinfo}
                            className=" rounded-md object-cover "
                          />
                        </div>
                        {/* malumot */}
                        <div className="  ">
                          <h3 className="text-base text-head font-semibold mb-1">
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
                      <div className="flex justify-between items-center mb-2">
                        <button onClick={() => handleDecrease(e.id)}>
                            <img src={minus} alt="minus" />
                        </button>
                        <span className="mx-2 text-lg">{counts[e.id] || 1}</span>
                        <button onClick={() => handleIncrease(e.id)}>
                            <img src={pilus} alt="plus" />
                        </button>
                     </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-2xl font-semibold text-head">
                            {e.price} ₽
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {e.price2}
                          </p>
                        </div>

                        <button className="bg-sariq text-white p-3 rounded" onClick={() => mahsulotniWishlistgaQoshish(e)}>
                          <img src={shop} alt="Add to Cart" />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <Subscribetwo />
              <ul className="grid grid-cols-3 gap-y-10 gap-x-5">
                {filteredProducts.slice(6, 12).map((e) => {
                  return (
                    <li
                      className="relative flex flex-col justify-between bg-white rounded-lg p-5 w-[264px] h-[402px] shadow-lg"
                      key={e.id}
                    >
                      <button
                        onClick={() => toggleLike(e)}
                        className="absolute top-2 right-3"
                      >
                        <img
                          src={likedProducts[e.id] ? likeactive : like}
                          alt="Like"
                        />
                      </button>

                      <Link to="/" className="block mb-2 ">
                        <div className="flex flex-col items-center mb-2">
                          <img
                            src={e.img}
                            alt={e.nameandinfo}
                            className=" rounded-md object-cover w-[180px]"
                          />
                        </div>
                        {/* malumot */}
                        <div className="  ">
                          <h3 className="text-base text-head font-semibold mb-1">
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
                        <button
                          onClick={() => handleDecrease(e.id)}
                          className=""
                        >
                          <img src={minus} alt="minus" />
                        </button>
                        <span className="text-lg">{counts[e.id]} кг</span>
                        <button
                          onClick={() => handleIncrease(e.id)}
                          className=""
                        >
                          <img src={pilus} alt="pilus" />
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-2xl font-semibold text-head">
                            {e.price} ₽
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {e.price2}
                          </p>
                        </div>

                        <button className="bg-sariq text-white p-3 rounded" onClick={() => mahsulotniWishlistgaQoshish(e)}>
                          <img src={shop} alt="Add to Cart" />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Production;
