import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="w-full flex flex-col flex-1 max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex mt-8 justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl text-slate-gray leading-normal">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat text-2xl leading-normal text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
