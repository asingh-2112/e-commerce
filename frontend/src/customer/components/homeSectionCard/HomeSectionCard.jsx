// import React from "react";

// const HomeSectionCard = ({product}) => {
//   return (
//     <div
//       className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
//     overflow-hidden w-[15rem] mx-3 "
//     >
//       <div className="h-[13rem] w-[10rem]">
//         <img
//           className="object-cover object-top w-full h-full"
//           src={product.imageUrl}
//           alt=""
//         ></img>
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
//         <p className="mt-2 text-sm text-gray-500">
//           {product.title}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCard;





import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden w-[15rem] mx-2 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 group">
      <div className="h-[13rem] w-[10rem] relative overflow-hidden">
        <img
          className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-105"
          src={product.imageUrl}
          alt={product.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 w-full">
        <h3 className="text-lg font-semibold text-gray-900 truncate w-full">
          {product.brand}
        </h3>
        <p className="mt-1 text-sm text-gray-600 truncate w-full">
          {product.title}
        </p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-base font-bold text-indigo-600">
            ${product.price}
          </span>
          {product.discountedPrice && (
            <span className="text-xs text-gray-400 line-through">
              ${product.discountedPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
