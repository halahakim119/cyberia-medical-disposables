import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type BenefitProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit: React.FC<BenefitProps> = ({
  icon,
  title,
  description,
  setSelectedPage,
}: BenefitProps) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <motion.div
      variants={childVariant}
      className={`mt-5  ${isAboveMediumScreens ? 'rounded-md border-2 mx-32 border-gray-100 px-20 py-8  shadow-xl  ' : ' rounded-md shadow-xl  m-8 p-5 mb-4 text-center text-sm'} text-center`}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-secondary-500 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>

      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.OurProducts)}
        href={`#${SelectedPage.OurProducts}`}
      >
        <p>Go to Our Products</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
