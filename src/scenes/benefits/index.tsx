
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { benefits } from "./benefitsData";

import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";
import useMediaQuery from "@/hooks/useMediaQuery";


const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* HEADER */}
        <motion.div
          className="md:my-16 mx-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-center font-montserrat text-5xl font-bold">
            MEDICAL DISPOSABLES
          </h1>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mx-10 items-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
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
            className="mt-0 mb-32"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
        )}

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-x-20 gap-y-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          {isAboveMediumScreens && (
            <img
              className="mt-0 mb-32 w-96 h-auto"
              alt="benefits-page-graphic"
              src={BenefitsPageGraphic}
            />
          )}

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
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
                  <HText>
                    Crafting Quality Disposable Products at{" "}
                    <span className="text-primary-500">Cyberia</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
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
              <p className="my-5">
                At Cyberia, we design and develop our disposable products internally, overseeing materials, technologies, production processes, and quality control systems. This ensures the highest quality across various sectors, including medical, dental, sports, promotional, and mass retail.
              </p>
              <p className="mb-5">
                Our in-house Research and Development department enables us to offer Cyberia-branded products and personalized lines for international companies. Customization at Cyberia extends beyond branding, allowing modifications to packaging types, sizes, and product formats. We consider our distributors as partners, valuing relationships both in Iraq and abroad.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;