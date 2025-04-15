import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img className="h-full w-full object-cover object-left-top"
          src="https://assets.ajio.com/medias/sys_master/root/20250128/WVXo/67983176bc78b543a9ffdd9c/-473Wx593H-701114600-black-MODEL.jpg"
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
            <p className="font-bold opacity-60">NYRIKA</p>
            <p>Women Printed Tunic</p>
        </div>
        <div className=" flex items-center space-x-2">
            <p className="font-semibold">₹350</p>
            <p className="line-through opacity-50">₹2000</p>
            <p className="text-green-600 font-semibold">70 % off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
