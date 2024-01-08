import React from "react";
import { SelectedPage } from "@/shared/types";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home: React.FC<Props> = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="gap-16 bg-white py-10 md:h-full md:scroll-pt-96 md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="flex flex-col">
                <h1 className="text-primary-100 text-5xl font-extrabold">
                  Your Premier Source for Medical Disposables
                </h1>
                <h3 className="text-primary-100 text-3xl">Crafting a Healthy Tomorrow</h3>
              </div>
            </div>
            <br />
            <p className="mt-8 text-justify">
              Cyberia, founded in 2020, is a trailblazer in the global market of medical disposable products. Our visionary CEO, with extensive experience in the chemical-medical field, inspired the dedication to design and supply top-notch medical disposable products. Originating in Amman, Jordan, Cyberia has swiftly become a beacon of excellence, earning global recognition. Beyond Jordan and Iraq, we lead the trade in various sectors—medical, dental, sports, promotional, and mass retail. Proudly serving major international distributors, we offer a diverse range of both Cyberia-branded and Private Label products, with a commitment to creating customized lines tailored to unique partner needs.
            </p>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
