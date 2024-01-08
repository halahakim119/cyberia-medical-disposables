import React, { useRef } from "react";
import { SelectedPage, ClassType } from "@/shared/types";
import { products } from './data';
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Product";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const OurProducts: React.FC<{ setSelectedPage: (value: SelectedPage) => void }> = ({ setSelectedPage }) => {

  const sliderRef = useRef<HTMLDivElement>(null);

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
    <section id="ourproducts" className="w-full bg-white">
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
            <HText>OUR PRODUCTS</HText>
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
