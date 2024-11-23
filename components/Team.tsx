import React from 'react';
import Image from 'next/image';

const Team = () => (
  <section className="font-manrope flex-col flexCenter overflow-hidden my-20 bg-[#F5F5F5]">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="z-20 flex w-full flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#333333] mt-10 ml-[60px]">
          Структура Организации
        </h1>
      </div>

      <div className="my-10 w-full flex flex-col items-center">
        <Image
          src="/structure.png" 
          width={750}
          height={750}
          alt="Структура Организации"
        />
      </div>
    </div>
  </section>
);

export default Team;
