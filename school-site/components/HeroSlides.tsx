"use client";
import Image from "next/image";
import {useState,useEffect} from "react";


const slides = ["/hero-3.webp", "/hero-1.webp", "/hero-2.webp"]
export default function HeroSlides(){
    const [active,setActive] = useState(0);
    useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1)%slides.length);
    }, 5000);
    return () => clearInterval(id);
    }, []);
    return (
  <div className="absolute inset-0" aria-hidden="true">
    {slides.map((src, index) => (
      <Image key ={src} src={src} alt="" fill sizes="100vw" priority={index === 0}  className={`object-cover transition-opacity duration-1000 motion-reduce:transition-none ${index === active ? "opacity-100" : "opacity-0"}`} />
    ))}
  </div>
)
}