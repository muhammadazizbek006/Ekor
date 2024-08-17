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
            [id]: (prevCounts[id] || 0) - 1,
        }));
    };

    const handleIncrease = (id) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1,
        }));
    };

    const toggleLike = (product) => {
        setLikedProducts((prevLikes) => ({
            ...prevLikes,
            [product.id]: !prevLikes[product.id],
        }));
    };

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
                            {open === 1
                                ? "Филе рыбы, стейки, фарш"
                                : open === 2
                                ? "Готовая продукция «Экор»"
                                : "Изделия из теста"}
                        </h3>
                        <span className="text-sm font-medium text-gray ">
                            {filteredProducts.length} товара
                        </span>
                    </div>

                    <div className="mb-16">
                        <ul className="grid grid-cols-3 gap-y-10 gap-x-5">
                            {filteredProducts.slice(0, 6).map((e) => {
                                return (
                                    <li
                                        className="relative bg-white rounded-lg p-4 w-[250px]"
                                        key={e.id}
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <img src={e.img} alt="img" className="w-[72px] h-[72px]" />
                                            <button
                                                className="absolute right-4 top-4"
                                                onClick={() => toggleLike(e)}
                                            >
                                                <img
                                                    src={
                                                        likedProducts[e.id]
                                                            ? likeactive
                                                            : like
                                                    }
                                                    alt="like"
                                                />
                                            </button>
                                        </div>
                                        <h4 className="text-sm font-semibold text-head mb-1">
                                            {e.name}
                                        </h4>
                                        <p className="text-sm text-gray mb-3">{e.weight}</p>
                                        <div className="flex items-center justify-between">
                                            <button
                                                className="bg-foot text-white px-3 py-1 rounded-lg"
                                                onClick={() => handleDecrease(e.id)}
                                            >
                                                -
                                            </button>
                                            <span className="text-lg font-semibold text-head">
                                                {counts[e.id] || 0}
                                            </span>
                                            <button
                                                className="bg-foot text-white px-3 py-1 rounded-lg"
                                                onClick={() => handleIncrease(e.id)}
                                            >
                                                +
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
    );
};

export default Sinov;
