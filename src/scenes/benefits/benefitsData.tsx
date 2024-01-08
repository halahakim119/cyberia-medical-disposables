import { BenefitType } from "@/shared/types";
import {
    ChartBarIcon,
    BeakerIcon,
    CogIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/solid";

export const benefits: Array<BenefitType> = [
    {
        icon: <ChartBarIcon className="h-6 w-6 text-white" />,
        title: "List of Disposable Medical Supplies",
        description:
            "Explore a wide range of medical disposables, including instant ice packs, heat packs, reusable gel packs, ice spray, medical sheets, gloves, disposable towels, napkins, sterilization pouches and rolls, disposable bibs, bibs with pockets, surgical masks, plasticized sheets, and more.",
    },
    {
        icon: <BeakerIcon className="h-6 w-6 text-white" />,
        title: "High-Quality Medical Products",
        description:
            "We prioritize excellence in choosing the best raw materials for our medical products, ensuring top-notch quality in every item we produce.",
    },
    {
        icon: <CogIcon className="h-6 w-6 text-white" />,
        title: "Customize Your Disposable Devices",
        description:
            "Our medical disposables are available in both Cyberia-branded and Private Label versions, offering customization possibilities for the products, including packaging and format. Personalize your supplies to increase brand awareness.",
    },
    {
        icon: <GlobeAltIcon className="h-6 w-6 text-white" />,
        title: "Disposable Healthcare Products Worldwide",
        description:
            "While we sell healthcare products within our company in Jordan, we ship them worldwide. Whether you are in the UK, Europe, or anywhere else in the world, you can order your disposable medical products and be sure to receive them safely.",
    },
];
