import React, { useState, useEffect } from "react";
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
import finished from '../imgs/acardion/finished.svg';
import xamr from '../imgs/acardion/xamr.svg';
// material tailwind
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Subscribetwo from "../components/Production/Subscribetwo";

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

const Sinov = () => {
    const [open, setOpen] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [counts, setCounts] = useState({});
    const [likedProducts, setLikedProducts] = useState({});
    const [files, setFiles] = useState([]);

    useEffect(() => {
        if (open === 1) {
            // Filter products for rawfish
            const rawfishProducts = seafood.filter((item) => item.type === "rawfish");
            setFilteredProducts(rawfishProducts);
            const uniqueFiles = [...new Set(rawfishProducts.map((item) => item.file))];
            setFiles(uniqueFiles);
        } else if (open === 2) {
            // Display all file types for finished products
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
            // Filter products for dough products
            const doughProducts = seafood.filter((item) => item.type === "Dough products");
            const uniqueFiles = [...new Set(doughProducts.map((item) => item.nameandinfo))];
            setFiles(uniqueFiles);

            if (selectedCategory) {
                const filteredByFile = doughProducts.filter((item) => item.nameandinfo === selectedCategory);
                setFilteredProducts(filteredByFile);
            } else {
                setFilteredProducts(doughProducts);
            }
        } else {
            // Filter products for rawfish
            const rawfishProducts = seafood.filter((item) =>
                item.type === "rawfish" && (selectedCategory ? item.nameandinfo === selectedCategory : true)
            );
            setFilteredProducts(rawfishProducts);
        }
    }, [open, selectedCategory]);

    const handleOpen = (id) => {
        setOpen(id);
    };

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

    const toggleLike = (product) => {
        setLikedProducts((prevLikes) => ({
            ...prevLikes,
            [product.id]: !prevLikes[product.id],
        }));
    };

    const totalWeight = filteredProducts.reduce((total, product) => {
        return total + ((counts[product.id] || 0) * product.weight);
    }, 0);

    const totalPrice = filteredProducts.reduce((total, product) => {
        return total + ((counts[product.id] || 0) * product.price);
    }, 0);

    return (
        <section>
            <div className="containerb flex">
                {/* left draw filter */}
                <div className="mr-8">
                    {/* file fish */}
                    <div className="mb-3">
                        <Accordion
                            className="w-[256px]"
                            open={open === 1}
                            icon={<Icon id={1} open={open} />}
                        >
                            <AccordionHeader
                                className="flex items-center bg-white rounded-lg p-4 mb-2"
                                onClick={() => handleOpen(1)}
                            >
                                <div className="flex items-start">
                                    <img src={steyk} alt="steyk" className="mr-2" />
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
                    {/* file finished products */}
                    <div className="mb-3">
                        <Accordion
                            className="w-[256px]"
                            open={open === 2}
                            icon={<Icon id={2} open={open} />}
                        >
                            <AccordionHeader
                                className="flex items-center bg-white rounded-lg p-4 mb-2"
                                onClick={() => handleOpen(2)}
                            >
                                <div className="flex items-start">
                                    <img src={finished} alt="finished" className="mr-2" />
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
                    {/* file dough products */}
                    <div className="mb-3">
                        <Accordion
                            className="w-[256px]"
                            open={open === 3}
                            icon={<Icon id={3} open={open} />}
                        >
                            <AccordionHeader
                                className="flex items-center bg-white rounded-lg p-4 mb-2"
                                onClick={() => handleOpen(3)}
                            >
                                <div className="flex items-start">
                                    <img src={xamr} alt="xamr" className="mr-2" />
                                    <p className="text-sm font-semibold text-head leading-4">
                                        Изделия из теста
                                    </p>
                                </div>
                            </AccordionHeader>

                            <AccordionBody className="flex flex-col items-start space-y-5">
                                {open === 3 &&
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
                </div>

                {/* right card product */}
                <div className="flex flex-col items-start space-y-4">
                    {filteredProducts.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-row bg-white p-4 rounded-lg w-full mb-4"
                        >
                            <div className="w-[100px] h-[100px] mr-4 bg-gray-200 rounded-lg">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col justify-between w-full">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <button onClick={() => toggleLike(item)}>
                                        <img
                                            src={likedProducts[item.id] ? likeactive : like}
                                            alt="like"
                                        />
                                    </button>
                                </div>
                                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                                <div className="flex items-center mb-2">
                                    <button onClick={() => handleDecrease(item.id)}>
                                        <img src={minus} alt="minus" />
                                    </button>
                                    <span className="mx-2 text-lg">{counts[item.id] || 1}</span>
                                    <button onClick={() => handleIncrease(item.id)}>
                                        <img src={pilus} alt="plus" />
                                    </button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-semibold">
                                        {item.price * (counts[item.id] || 1)} сом
                                    </p>
                                    <button className="flex items-center bg-green-500 text-white p-2 rounded-lg">
                                        <img src={shop} alt="shop" className="mr-2" />
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Total */}
            <div className="flex justify-between mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-lg font-semibold">Общий вес: {totalWeight} кг</p>
                <p className="text-lg font-semibold">Общая сумма: {totalPrice} сом</p>
            </div>

            <Subscribetwo />
        </section>
    );
};

export default Sinov;
