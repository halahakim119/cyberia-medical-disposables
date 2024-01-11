
import Confort from "@/assets/sponsors/confort.png";
import LohmannRauscher from "@/assets/sponsors/LohmannRauscher.png";
import Kangning from "@/assets/sponsors/Kangning.png";
import Vea from "@/assets/sponsors/vea.png";
import ConfortBigger from "@/assets/sponsors/confortBigger.png";
import LohmannRauscherBigger from "@/assets/sponsors/LohmannRauscherBigger.png";
import KangningBigger from "@/assets/sponsors/KangningBigger.png";
import VeaBigger from "@/assets/sponsors/veaBigger.png";
import SponsorLink from "./SponsorLink";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Sponsors = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <div className="m-10">
            <br id="sponsors" />
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Sponsors)}>

                <h1 className={` text-center  font-bold  ${isAboveMediumScreens ? "text-3xl pb-20 " : "text-2xl pb-10"}`}>
                    SPONSORED BY
                </h1>

                {isAboveMediumScreens ? (
                    <div className="h-[115px] w-full bg-white">
                        <div className="w-full">
                            <div className="flex justify-center gap-36">
                                <SponsorLink
                                    href="https://www.confortostomi.com/anasayfa"
                                    image={ConfortBigger}
                                />
                                <SponsorLink
                                    href="https://www.lohmann-rauscher.com/en/"
                                    image={LohmannRauscherBigger}
                                />
                                <SponsorLink
                                    href="http://kangning-medical.com/"
                                    image={KangningBigger}
                                />
                                <SponsorLink
                                    href="https://veahealth.co.za/"
                                    image={VeaBigger}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="h-auto w-full bg-white">
                        <div className="w-full flex justify-center gap-36 my-10 flex-wrap">
                            <SponsorLink
                                href="https://www.confortostomi.com/anasayfa"
                                image={Confort}
                            />
                            <SponsorLink
                                href="https://www.lohmann-rauscher.com/en/"
                                image={LohmannRauscher}
                            />
                            <SponsorLink
                                href="http://kangning-medical.com/"
                                image={Kangning}
                            />
                            <SponsorLink
                                href="https://veahealth.co.za/"
                                image={Vea}
                            />
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Sponsors;
