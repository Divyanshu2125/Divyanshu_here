// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center">
          <p className="font-semibold mb-4 text-[#16f2b3] text-2xl lg:text-3xl uppercase tracking-wider">
            Who I am?
          </p>
          <p className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed font-light">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2 lg:col-span-5">
          <Image
            src={personalData.profile}
            width={380}
            height={380}
            alt="Divyanshu Kaushal"
            className="rounded-xl transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer shadow-2xl border border-indigo-500/20 object-cover w-full max-w-[360px] h-[360px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;