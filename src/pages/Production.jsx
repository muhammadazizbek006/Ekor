import React from 'react'
import Processing from '../components/Production/Processing'
import arrow from '../imgs/Production/arrow.svg'
import { Link } from 'react-router-dom';
// data
import { seafood } from '../data/Data';
import like from '../imgs/Production/heart.svg'
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
const Production = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
        <Processing/>
        <section>
          <div className="containerb flex justify-between">
            {/* left */}
            <div className="flex flex-col justify-start items-start space-y-5">
            {seafood.map((quiz, id) => {
              return (
                <Accordion
                  icon={
                    <img src={arrow} className={`transition-transform duration-200 w-8  h-8 ${
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
           <ul className='grid grid-cols-3 gap-x-5 gap-y-10'>
            {
              seafood.map((e)=>{
                return(
                  <li>
                    <button>
                      <img src={like} alt="" />
                    </button>
                    <Link>
                      <img src={e.img} alt="" />
                      <div>
                        <h3>{e.nameandinfo}</h3>
                        <div>
                          {/* left */}
                          <div>
                            <p>Дата выработки: </p>
                            <p>{e.productiondate}</p>
                          </div>
                          <div>
                            <p>Срок годности:  </p>
                            <p>{e.Bestbeforedate}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })
            }
           </ul>
          </div>
        </section>
    </>
  )
}

export default Production
