"use client";

import bgImg from "../../../assets/homebg.jpg"
import AvatarImg from "../../../assets/person1.png"
import Navbar from "../common/Navbar";
import ImageCarousel from "./ImageCarousel";



export default function Hero() {

    const slideData = [
        {
            header: "carousel.slide1.header",
            description: "carousel.slide1.description",
            image: AvatarImg.src,
            imageSize: { width: 280, height: 280 },
            readMore: "https://example.com/therapy"
        },
        {
            header: "carousel.slide2.header",
            description: "carousel.slide2.description",
            image: AvatarImg.src,
            imageSize: { width: 280, height: 280 },
            readMore: "https://example.com/therapy"
        },
        {
            header: "carousel.slide3.header",
            description: "carousel.slide3.description",
            image: AvatarImg.src,
            imageSize: { width: 280, height: 280 },
            readMore: "https://example.com/therapy"
        },
        {
            header: "carousel.slide4.header",
            description: "carousel.slide4.description",
            image: AvatarImg.src,
            imageSize: { width: 280, height: 280 },
            readMore: "https://example.com/therapy"
        }
    ];
    return (
        <div
            style={{
                backgroundImage: `url(${bgImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative w-full min-h-svh"
        >
            <div className="absolute inset-0 bg-[#4B2615]/70 min-h-svh"></div>


            <div className="relative z-10">
                <Navbar />
                <ImageCarousel slides={slideData} />
            </div>
        </div >
    );
}
