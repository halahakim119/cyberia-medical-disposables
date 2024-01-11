
import React from "react";

import "react-image-gallery/styles/css/image-gallery.css";
import useMediaQuery from "@/hooks/useMediaQuery";

import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Occluder from "./2023.7.17_Catalogue-Occluder_Device[2].pdf";
import OccluderPic from "@/assets/catalogue/2023.7.17_Catalogue-Occluder_Device-01.png";
import Products from "./pci-product-catalogue_230905_194929.pdf";
import ProductsPic from "@/assets/catalogue/pci-product-catalogue_230905_194929-01.png";
import profile from "../home/Cyberia Profile company small size.pdf";
import profilepic from "@/assets/catalogue/Cyberia Profile company small size-1.png";
import medPic from "@/assets/catalogue/med.jpg";
import Slider from "react-slick";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};


const Catalogue: React.FC<Props> = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Catalogue)}
        >
            <motion.div
                className="mx-2 my-40"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div>
                    <br id="catalogue" />
                    <h1 className={`text-center font-bold ${isAboveMediumScreens ? "text-3xl pb-24" : "text-2xl pb-14"}`}>
                        CATALOGUE PDF DOWNLOAD
                    </h1>


                    <div className="h-auto w-full bg-white">
                        {isAboveMediumScreens ? (
                            <div className="w-full px-20 ">
                                <div className="flex justify-center gap-10">
                                    {renderPDFLink(Occluder, OccluderPic)}
                                    {renderPDFLink(Products, ProductsPic)}
                                    {renderPDFLink(profile, profilepic)}

                                    <img alt="pdf" src={medPic} className=" min-w-44 h-fit max-w-screen-xs" />

                                </div>
                            </div>
                        ) : (
                            <Slider {...settings}>
                                {renderPDFLink(Occluder, OccluderPic)}
                                {renderPDFLink(Products, ProductsPic)}
                                {renderPDFLink(profile, profilepic)}
                                <img alt="pdf" src={medPic} className="w-full" />

                            </Slider>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
const renderPDFLink = (link: string, image: string) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-grow-0"
        title="click to download"
    >
        <img alt="pdf" src={image} className="w-full" />
    </a>
);

export default Catalogue;
