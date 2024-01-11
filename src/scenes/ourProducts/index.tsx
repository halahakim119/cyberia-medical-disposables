import React, { useRef } from "react";
import { SelectedPage, ClassType } from "@/shared/types";
import { products } from './data';
import { motion } from "framer-motion";

import Class from "./Product";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import useMediaQuery from "@/hooks/useMediaQuery";

const OurProducts: React.FC<{ setSelectedPage: (value: SelectedPage) => void }> = ({ setSelectedPage }) => {

  const sliderRef = useRef<HTMLDivElement>(null);

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };
  return (
    <section id="ourproducts" className="w-full bg-white mt-20 shadow-xl">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurProducts)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-full mb-20 text-center">


            <h1 className={` text-center  font-bold  ${isAboveMediumScreens ? "text-3xl pb-8 " : "text-2xl pb-6"}`}>
              OUR PRODUCTS
            </h1>
          </div>
        </motion.div>

        <div className='relative flex items-center'>
          <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
          <div
            id='slider'
            ref={sliderRef}
            className='w-full h-full flex overflow-x-scroll scroll-smooth scrollbar-hide'
          >
            {products.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                brand={item.brand}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
          <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
        </div>
      </motion.div>
    </section>
  );
};

export default OurProducts;
