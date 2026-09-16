"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = [
  "/images/hero.webp",
  "/images/iamge2.webp",
  "/images/image3.webp",
];

export function HeroCarouselBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 bg-slate-900" aria-hidden="true">
      {IMAGES.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`RHA Builders Construction & Real Estate Development - Slide ${index + 1}`}
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ${
            index === 0
              ? "object-center sm:object-[84%_70%] lg:object-[88%_70%]"
              : index === 1
              ? "object-top sm:object-[50%_30%] lg:object-[50%_25%]"
              : "object-[50%_40%] sm:object-[50%_35%] lg:object-[50%_35%]"
          } ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
          quality={95}
        />
      ))}
      
      {/* White fade at the bottom (Mobile Only) */}
      <style dangerouslySetInnerHTML={{__html: `
        .hero-mobile-fade { display: block; }
        @media (min-width: 768px) {
          .hero-mobile-fade { display: none !important; }
        }
      `}} />
      <div 
        className="absolute inset-x-0 bottom-0 pointer-events-none z-10 hero-mobile-fade" 
        style={{
          height: '180px',
          background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)'
        }}
        aria-hidden="true" 
      />
    </div>
  );
}
