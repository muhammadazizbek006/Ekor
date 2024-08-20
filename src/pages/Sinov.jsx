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

    // Calculate total weight and price
    const totalWeight = filteredProducts.reduce((total, product) => {
        const productWeight = counts[product.id] || 1; // Use count to determine weight
        return total + (productWeight * (product.weight || 0)); // Calculate total weight
    }, 0);

    const totalPrice = filteredProducts.reduce((total, product) => {
        const productCount = counts[product.id] || 1; // Default to 1 if count is not set
        return total + (productCount * product.price); // Calculate total price
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
                {/* right show products */}
                <div className="overflow-y-auto w-full">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="flex items-center mb-4">
                            <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="ml-4 flex-1">
                                <h2 className="text-lg font-bold">{product.name}</h2>
                                <p className="text-sm text-gray-600">
                                    {product.description}
                                </p>
                                <p className="text-md font-semibold">
                                    {product.price} $ /kg
                                </p>
                                <div className="flex items-center mt-2">
                                    <button
                                        onClick={() => handleDecrease(product.id)}
                                        className="bg-red-500 text-white p-2 rounded"
                                    >
                                        <img src={minus} alt="minus" className="w-4 h-4" />
                                    </button>
                                    <span className="mx-4 text-lg font-semibold">
                                        {counts[product.id] || 1} kg
                                    </span>
                                    <button
                                        onClick={() => handleIncrease(product.id)}
                                        className="bg-blue-500 text-white p-2 rounded"
                                    >
                                        <img src={pilus} alt="plus" className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => toggleLike(product)}
                                        className="ml-4"
                                    >
                                        <img
                                            src={likedProducts[product.id] ? likeactive : like}
                                            alt="like"
                                            className="w-6 h-6"
                                        />
                                    </button>
                                </div>
                                <p className="text-md font-semibold mt-2">
                                    Total: {(counts[product.id] || 1) * product.price} $
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="mt-6">
                        <h2 className="text-lg font-bold">Overall Total</h2>
                        <p className="text-md font-semibold">
                            Total Weight: {totalWeight} kg
                        </p>
                        <p className="text-md font-semibold">
                            Total Price: {totalPrice} $
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sinov;
