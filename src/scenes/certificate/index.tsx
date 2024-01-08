import React from "react";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import certificate1 from "../certificate/CE-Full Quality Assurance System.pdf";
import certificate2 from "../certificate/Certificate Migration Letter January 2019 12022019.pdf";
import certificate3 from "../certificate/ISO Certificate -2023-05-17至2025-06-03-New.pdf";
import certificate1Pic from "@/assets/CE-Full Quality Assurance System-1.png";
import certificate2Pic from "@/assets/Certificate Migration Letter January 2019 12022019-1.png";
import certificate3Pic from "@/assets/ISO Certificate -2023-05-17至2025-06-03-New-1.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Certificates: React.FC<Props> = ({ setSelectedPage }: Props) => {
    return (
        <>
            <br id="certificates" />
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Certificates)}
            >
                <motion.div
                    className="mx-20 my-40"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <h1 className="text-3xl font-bold mb-10 text-center">CERTIFICATES</h1>

                    <div className="h-auto w-full bg-white">
                        <div className="w-full">
                            <div className="flex justify-center gap-5">
                                {renderCertificateLink(certificate1, certificate1Pic)}
                                {renderCertificateLink(certificate2, certificate2Pic)}
                                {renderCertificateLink(certificate3, certificate3Pic)}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

const renderCertificateLink = (certificateLink: string, certificateImage: string) => (
    <a
        href={certificateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-grow-0"
        title="click to download"
    >
        <img alt="certificate" src={certificateImage} className="w-full" />
    </a>
);

export default Certificates;