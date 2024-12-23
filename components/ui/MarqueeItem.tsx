import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MarqueeItemProps {
  images: { src: string; text: string }[];
  from: string;
  to: string;
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 pr-10 h-20 md:h-40 w-fit">
            <Image className="h-10 w-10 md:h-20 md:w-20" src={item.src} alt={`Icon ${index + 1}`} />
            <span className="text-sm md:text-lg text-white">{item.text}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 pr-10 h-20 md:h-40 w-fit">
            <Image className="h-10 w-10 md:h-20 md:w-20" src={item.src} alt={`Icon ${index + 1}`} />

            <span className="text-sm md:text-lg text-white">{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
