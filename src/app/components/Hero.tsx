import Image from "next/image";
import React from "react";
import heroImg from "../../../public/hero-image.png";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export function Hero() {
  return (
    <div className='w-full h-[450px] overflow-hidden relative'>
      <AspectRatio ratio={16 / 9} className='-z-10'>
        <Image
          src={heroImg}
          alt='Photo by Drew Beamer'
          fill
          className='rounded-md object-cover'
        />
      </AspectRatio>
      {/* TODO - Se över placing av banner text för responsivitet */}
      <div className='bg-black/70 h-full w-full z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-start text-white'>
        <span className='ml-[400px] text-5xl'>asdasdökjasdklas</span>
      </div>
    </div>
  );
}
