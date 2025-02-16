"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// import github from "@/assets/github.svg";
// import linkedin from "@/assets/linkedin.svg";
// import x from "@/assets/x.svg";
import whatsapp from "@/assets/whatsapp.svg";

const images = [
 
  { src: whatsapp, alt: "whatsapp" },
  
  { src: whatsapp, alt: "whatsapp" },
];

export const LogoAnimation = () => {
  return (
    <div className="py-8 bg-purple-200/10 opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden relative w-full">
          <motion.div
            className="flex gap-14 flex-nowrap w-max"
            animate={{
              x: ["0%", "-100%"], // Moves the entire row leftward
            }}
            transition={{
              duration: 20, // Adjust speed
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplicate the array to create seamless looping effect */}
            {[...images, ...images].map((image, index) => (
              <Image key={index} src={image.src} alt={image.alt} height={30} width={30} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
