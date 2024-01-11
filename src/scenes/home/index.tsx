import React from "react";
import { SelectedPage } from "@/shared/types";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home: React.FC<Props> = ({ setSelectedPage }: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className={`${isAboveMediumScreens ? "px-20 pt-48  " : "px-10 pt-40 "} pb-20 items-center justify-center md:flex  shadow-lg }`}
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="md:basis-3/5 ">
          {/* HEADINGS */}
          <motion.div

            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative ">
              <div className="flex flex-col ">


                <h1 className={` text-primary-100  font-extrabold ${isAboveMediumScreens ? "text-5xl" : "text-3xl"}`}>
                  Your Premier Source for Medical Disposables
                </h1>
                <h3 className={` text-primary-100 mt-5 ${isAboveMediumScreens ? "text-3xl" : "text-2xl"}`}>Crafting a Healthy Tomorrow</h3>
              </div>
            </div>
            <br />
            <p className="mt-8 text-justify text-sm">
              Cyberia, founded in 2020, is a trailblazer in the global market of medical disposable products. Our visionary CEO, with extensive experience in the chemical-medical field, inspired the dedication to design and supply top-notch medical disposable products. Originating in Amman, Jordan, Cyberia has swiftly become a beacon of excellence, earning global recognition. Beyond Jordan and Iraq, we lead the trade in various sectors—medical, dental, sports, promotional, and mass retail. Proudly serving major international distributors, we offer a diverse range of both Cyberia-branded and Private Label products, with a commitment to creating customized lines tailored to unique partner needs.
            </p>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex  justify-center  md:ml-20 mt-20 "
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
