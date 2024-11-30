import React from 'react';
import Button from '@/components/Button';
import Image from 'next/image';
import { UserIcon } from '@heroicons/react/24/solid';

const Cover = () => {
  return (
    <section id="about_us" className='font-inter font-bold max-container padding-container flex flex-col gap-20 py-32 md:gap-28 lg:py-20 xl:flex-row mt-10 md:mb-10'>
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2 m-2 mb-0 md:m-10 bg-[#f3fbf7] px-10 py-10 top-[-40px] h-[600px] rounded-5xl'>
      <h1 className="ml-3 font-bold text-[35px] sm:text-[35px] md:text-[55px] lg:text-[70px]">
        <span className='text-green-50'>"Ziyatker"</span> <br /> Жастар Ұйымы
        </h1>
        <p className='ml-3 regular-16 mt-3 text-gray-30 xl:max-w-[520px]'>Республикалық Жастар Ұйымы, АОО НИШ қолдауымен жұмыс істейді.</p>
        <br />
        <div className='flex flex-col w-full gap-3 sm:flex-row'>
          <Button 
            type="button"
            title="Жобалар"
            variant="btn_green"
            action="kz/projects"
          />
          <Button 
            type="button"
            title="Жаңалықтар Лентасы"
            icon="/play.svg"
            variant="btn_white_text"
            action="kz/news"
          />
        </div>
      </div>

      <div className="relative h-[600px] w-[500px] hidden xl:flex">
        <Image
          src="/nis_students.jpeg"
          alt="cover"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-5xl hidden xl:flex" 
        />
        
        <div className="absolute w-[250px] h-[200px] px-10 justify-center items-center flex flex-col text-center left-[-130px] bottom-[100px] bg-white p-4 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 hidden xl:flex">
          <p className="font-bold text-lg pb-5">Ашық сөйлеңіз - мектебіңіздің <span className='text-green-500'>дауысы</span> болыңыз!</p>
          <div className="flex space-x-2 mt-2">
            <img src="/happy_1.jpeg" alt="icon" className="h-12 w-12 rounded-full hidden xl:block" />
            <img src="/happy_2.jpeg" alt="icon" className="h-12 w-12 rounded-full hidden xl:block" />
            <img src="/happy_3.jpeg" alt="icon" className="h-12 w-12 rounded-full hidden xl:block" />
          </div>
        </div>

        <div className="absolute w-[150px] h-[175px] justify-center items-center flex flex-col text-center right-[-20px] bottom-10 bg-white p-4 rounded-lg shadow-lg transition-transform transform duration-500 hover:scale-105 hidden xl:flex md:hidden"> {/* Hide on small devices */}
          <UserIcon className='text-green-500 size-6' />
          <h1 className='font-bold text-2xl text-green-500 mt-3'>2000+</h1>
          <p className="text-gray-800 text-sm mt-3">Бізбен бірге оқушылар</p>
        </div>
      </div>
    </section>
  );
};

export default Cover;
