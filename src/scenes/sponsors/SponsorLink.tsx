import React from "react";

type SponsorLinkProps = {
    href: string;
    image: string;
};

const SponsorLink: React.FC<SponsorLinkProps> = ({ href, image }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex-grow-0">
            <img alt="confort-sponsor" src={image} className="w-full" />
        </a>
    );
};

export default SponsorLink;
