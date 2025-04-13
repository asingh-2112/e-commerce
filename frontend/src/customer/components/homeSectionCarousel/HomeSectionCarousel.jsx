// import React, { useRef, useState } from "react";
// import AliceCarousel from "react-alice-carousel";
// import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import { Button } from "@mui/material";
// import { mens_kurta } from "../../../data/mens_kurta";

// const HomeSectionCarousel = () => {
//   const carouselRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const responsive = {
//     0: { items: 1 },
//     720: { items: 3 },
//     1024: { items: 5.5 },
//   };

//   const items = mens_kurta
//     .slice(0, 10)
//     .map((item, index) => <HomeSectionCard key={index} product={item} />);

//   const totalItems = items.length;

//   const slidePrev = () => {
//     if (carouselRef.current) {
//       carouselRef.current.slidePrev();
//     }
//   };

//   const slideNext = () => {
//     if (carouselRef.current) {
//       carouselRef.current.slideNext();
//     }
//   };

//   const handleSlideChanged = ({ item }) => {
//     setCurrentIndex(item);
//   };

//   // Adjust this according to the number of visible items on large screens
//   const maxVisibleItems = 5.5;
//   const maxIndex = Math.ceil(totalItems - maxVisibleItems);

//   return (
//     <div className="px-4 lg:px-8">
//       <div className="relative p-5">
//         <AliceCarousel
//           ref={carouselRef}
//           items={items}
//           disableButtonsControls
//           responsive={responsive}
//           disableDotsControls
//           onSlideChanged={handleSlideChanged}
//         />

//         <Button
//           variant="contained"
//           className="z-50 bg-white"
//           onClick={slideNext}
//           disabled={currentIndex >= maxIndex}
//           sx={{
//             position: "absolute",
//             top: "8rem",
//             right: "0rem",
//             transform: "translateX(50%) rotate(90deg)",
//             bgcolor: "white",
//             opacity: currentIndex >= maxIndex ? 0.5 : 1,
//           }}
//           aria-label="next"
//         >
//           <KeyboardArrowLeftIcon
//             sx={{ transform: "rotate(90deg)", color: "black" }}
//           />
//         </Button>

//         <Button
//           onClick={slidePrev}
//           variant="contained"
//           className="z-50 bg-white"
//           disabled={currentIndex === 0}
//           sx={{
//             position: "absolute",
//             top: "8rem",
//             left: "0rem",
//             transform: "translateX(-50%) rotate(-90deg)",
//             bgcolor: "white",
//             opacity: currentIndex === 0 ? 0.5 : 1,
//           }}
//           aria-label="prev"
//         >
//           <KeyboardArrowLeftIcon
//             sx={{ transform: "rotate(90deg)", color: "black" }}
//           />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarousel;







import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";

const HomeSectionCarousel = ({data,sectionName}) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    640: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1280: { items: 5 },
  };

  const items = data
    .slice(0, 10)
    .map((item, index) => <HomeSectionCard key={index} product={item} />);

  const totalItems = items.length;
  const maxVisibleItems = 5;
  const maxIndex = Math.ceil(totalItems - maxVisibleItems);

  const slidePrev = () => carouselRef.current?.slidePrev();
  const slideNext = () => carouselRef.current?.slideNext();

  const handleSlideChanged = ({ item }) => setCurrentIndex(item);

  return (
    <div className="relative px-4 lg:px-8 py-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl mx-4 my-8">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">{sectionName}</h2>
        {/* <p className="text-gray-500 mt-2">Discover our latest collection</p> */}
      </div>
      {/* <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2> */}
      <div className="relative">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={handleSlideChanged}
          mouseTracking
          paddingLeft={20}
          paddingRight={20}
        />

        {currentIndex > 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 !absolute !top-1/2 !left-0 !transform -translate-y-1/2 -translate-x-4 !min-w-0 !rounded-full !p-2 !bg-white !shadow-lg hover:!bg-gray-100"
            sx={{
              opacity: currentIndex === 0 ? 0 : 1,
              transition: "opacity 0.3s",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeft className="!text-gray-800 !text-2xl" />
          </Button>
        )}

        {currentIndex < maxIndex && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 !absolute !top-1/2 !right-0 !transform -translate-y-1/2 translate-x-4 !min-w-0 !rounded-full !p-2 !bg-white !shadow-lg hover:!bg-gray-100"
            sx={{
              opacity: currentIndex >= maxIndex ? 0 : 1,
              transition: "opacity 0.3s",
            }}
            aria-label="next"
          >
            <KeyboardArrowRight className="!text-gray-800 !text-2xl" />
          </Button>
        )}
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.min(5, maxIndex + 1) }).map((_, i) => (
          <button
            key={i}
            onClick={() => carouselRef.current?.slideTo(i)}
            className={`w-2 h-2 rounded-full transition-all ${currentIndex >= i && currentIndex < i + maxVisibleItems ? 'bg-indigo-600 w-4' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;