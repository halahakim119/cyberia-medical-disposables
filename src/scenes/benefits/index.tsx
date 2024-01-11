

import { BenefitType, SelectedPage } from "@/shared/types";
import { benefits } from "./benefitsData";

import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";
import useMediaQuery from "@/hooks/useMediaQuery";


const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="benefits" className="mx-auto min-h-full flex flex-col justify-center items-center  ">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* HEADER */}
        <motion.div
          className="m-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className={` text-center  font-bold  ${isAboveMediumScreens ? "text-3xl p-10" : "text-2xl p-10"}`}>
            MEDICAL DISPOSABLES
          </h1>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className={`items-center   ${isAboveMediumScreens ? '' : 'flex flex-col w-auto '}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>




        {!isAboveMediumScreens && (
          <img
            className="p-14 "
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
        )}


        <div className=" items-center justify-between gap-x-20 md:my-28 md:mx-10 md:flex rounded-md  shadow-xl m-10 ">

          {isAboveMediumScreens && (
            <img
              className=" w-96 h-auto p-5"
              alt="benefits-page-graphic"
              src={BenefitsPageGraphic}
            />
          )}

          <div className=" p-8 rounded-3xl ">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h1 className={` text-center  font-bold  ${isAboveMediumScreens ? "text-3xl pb-8 " : "text-2xl pb-6"}`}>
                Crafting Quality Disposable Products at{" "}
                <span className="text-primary-500">Cyberia</span>

              </h1>

            </motion.div>


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5  text-center  text-sm" >
                At Cyberia, we design and develop our disposable products internally, overseeing materials, technologies, production processes, and quality control systems. This ensures the highest quality across various sectors, including medical, dental, sports, promotional, and mass retail.
              </p>
              <p className="mb-5 text-center  text-sm ">
                Our in-house Research and Development department enables us to offer Cyberia-branded products and personalized lines for international companies. Customization at Cyberia extends beyond branding, allowing modifications to packaging types, sizes, and product formats. We consider our distributors as partners, valuing relationships both in Iraq and abroad.
              </p>
            </motion.div>

          </div>
        </div>


      </motion.div>
    </section >

  );
};

export default Benefits;