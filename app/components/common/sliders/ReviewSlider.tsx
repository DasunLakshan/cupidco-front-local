
// "use client";
// import React, { useEffect, useRef } from "react";
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";

// // Enable required Swiper modules
// SwiperCore.use([Navigation, Pagination, Autoplay]);

// // Define the interface for ReviewSliderProps
// interface ReviewSliderProps {
//   description: string;
//   image: string;
//   name: string;
//   date: string;
// }

// // Define the ReviewSlider component
// const ReviewSlider: React.FC<ReviewSliderProps> = ({
//   description,
//   image,
//   name,
//   date,
// }) => {
//   // Create a ref to store the Swiper instance
//   const swiperRef = useRef<SwiperCore | null>(null);

//   // Set up an effect to automatically slide to the next item every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (swiperRef.current) {
//         swiperRef.current?.swiper.slideNext();
//       }
//     }, 3000);

//     // Clean up the interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   // Return the Swiper component with three slides
//   return (
//     <Swiper
//       ref={(swiper) => (swiperRef.current = swiper)}
//       navigation
//       pagination={{ clickable: true }}
//       spaceBetween={20}
//       slidesPerView={1}
//       autoplay={{ delay: 3000 }}
//       loop={true}
//     >
//       {/* First Card */}
//       <SwiperSlide>
//         <div className="flex bg-[#EBADA1] bg-opacity-35 rounded-lg shadow md:flex-row md:max-w-xl">
//           <div className="w-full md:w-[258px] h-[256px]">
//             <img
//               className="w-full h-full object-cover rounded-lg"
//               src={image}
//               alt=""
//             />
//           </div>
//           <div className="flex flex-col justify-center p-4 w-full">
//             <div className="flex flex-col">
//               <p className="mb-1 font-normal text-[#6D2E46] dark:text-gray-400">
//                 {description}
//               </p>
//             </div>
//             <div className="flex justify-end">
//               <h5 className="text-sm font-bold tracking-tight text-[#4D194D] dark:text-white">
//                 {name}
//               </h5>
//               <p className="text-sm text-[4D194D] dark:text-gray-300 ml-auto">
//                 {date}
//               </p>
//             </div>
//           </div>
//         </div>
//       </SwiperSlide>

//       {/* Second Card */}
//       <SwiperSlide>
//         <div className="flex bg-[#EBADA1] bg-opacity-35 rounded-lg shadow md:flex-row md:max-w-xl">
//           <div className="w-full md:w-[258px] h-[256px]">
//             <img
//               className="w-full h-full object-cover rounded-lg"
//               src={image} // Replace with Card 2 specific image
//               alt=""
//             />
//           </div>
//           <div className="flex flex-col justify-center p-4 w-full">
//             <div className="flex flex-col">
//               <p className="mb-1 font-normal text-[#6D2E46] dark:text-gray-400">
//                 {description}
//               </p>
//             </div>
//             <div className="flex justify-end">
//               <h5 className="text-sm font-bold tracking-tight text-[#4D194D] dark:text-white">
//                 {name}
//               </h5>
//               <p className="text-sm text-[4D194D] dark:text-gray-300 ml-auto">
//                 {date}
//               </p>
//             </div>
//           </div>
//         </div>
//       </SwiperSlide>

//       {/* Third Card */}
//       <SwiperSlide>
//         <div className="flex bg-[#EBADA1] bg-opacity-35 rounded-lg shadow md:flex-row md:max-w-xl">
//           <div className="w-full md:w-[258px] h-[256px]">
//             <img
//               className="w-full h-full object-cover rounded-lg"
//               src={image} // Replace with Card 3 specific image
//               alt=""
//             />
//           </div>
//           <div className="flex flex-col justify-center p-4 w-full">
//             <div className="flex flex-col">
//               <p className="mb-1 font-normal text-[#6D2E46] dark:text-gray-400">
//                 {description}
//               </p>
//             </div>
//             <div className="flex justify-end">
//               <h5 className="text-sm font-bold tracking-tight text-[#4D194D] dark:text-white">
//                 {name}
//               </h5>
//               <p className="text-sm text-[4D194D] dark:text-gray-300 ml-auto">
//                 {date}
//               </p>
//             </div>
//           </div>
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// // Export the ReviewSlider component
// export default ReviewSlider;
