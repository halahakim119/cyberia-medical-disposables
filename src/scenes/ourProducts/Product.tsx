import React from "react";

type Props = {
  brand: string;
  name: string;
  description?: string;
  image: string;
};

const ProductCard: React.FC<Props> = ({ brand, name, description, image }: Props) => {
  return (
    <div className="relative h-[300px] w-[300px] overflow-hidden flex-none mr-4">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-primary-500 text-white text-center opacity-0 transition duration-500 hover:opacity-90">
        <div>
          <p className="text-2xl">{brand}</p>
          <p className="text-2xl">{name}</p>
          {description && <p className="mt-5">{description}</p>}
        </div>
      </div>
      <img alt={image} src={image} className="object-scale-down" />
    </div>
  );
};

export default ProductCard;
