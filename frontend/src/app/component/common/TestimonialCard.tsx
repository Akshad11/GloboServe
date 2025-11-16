"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TestimonialCardProps {
    image: string;
    message: string;
    name: string;
    position: string;
}

export default function TestimonialCard({
    image,
    message,
    name,
    position
}: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
        w-full
        py-16 px-8 md:px-16 
        flex flex-col md:flex-row 
        gap-12 md:gap-16
      "
        >
            {/* LEFT IMAGE CONTAINER */}
            <div className="w-full md:w-[40%] flex justify-center items-center">
                <div className="relative w-60 h-60 md:w-72 md:h-72 bg-[#643F2E]">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover shadow-lg"
                    />
                </div>
            </div>

            {/* RIGHT TEXT SECTION */}
            <div className="w-full md:w-[60%] flex flex-col justify-between">

                {/* MESSAGE */}
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    "{message}"
                </p>

                {/* NAME + POSITION FIXED AT BOTTOM */}
                <div className="mt-auto">
                    <h3 className="text-2xl font-semibold text-white">{name}</h3>
                    <p className="text-gray-300 text-md mt-1">{position}</p>
                </div>

            </div>
        </motion.div>
    );
}
