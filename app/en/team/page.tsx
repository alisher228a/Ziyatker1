import { fetchMinistries } from '@/app/lib/data';
import Image from 'next/image';
import React from 'react';

const Team = async () => {

  const ministries = await fetchMinistries();
  
  return (
    <section>
      <div
        className="relative font-manrope font-extrabold padding-container flex flex-col gap-20 pt-20 md:gap-28 lg:pt-20 xl:flex-row mt-20 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/ziyatker_team.jpg')" }}
      >
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 m-2 mb-0 md:m-10 px-10 pt-10 top-[-40px] h-[600px] rounded-5xl">
          <div className="relative flex justify-center items-center">
            <div
              className="absolute bg-white opacity-95 rounded-2xl"
              style={{
                zIndex: -1,
                width: "95%", 
                maxWidth: "1080px", 
                height: "100%",
              }}
            ></div>

            <h1 className="text-center font-extrabold text-[40px] sm:text-[55px] md:text-[60px] lg:text-[70px] uppercase text-black">
              Our team "<span className="text-green-50">Ziyatker</span>"
            </h1>
          </div>
        </div>
      </div>

      <div className='relative flex flex-col items-center pb-24 bg-green-500 mb-20 pt-20'>
        <div className='w-full max-w-7xl px-8'>
          <div className={`flex flex-col md:flex-row w-full max-w-full mb-10 py-10 px-5 sm:px-10 rounded-3xl bg-white shadow-lg overflow-hidden`}>
            <div className="flex-shrink-0 p-4 mx-auto md:mx-0">
              <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[300px]">
                <Image
                src="/elnar.jpeg"
                alt=""
                fill
                style={{ objectFit: "cover"}}
                className="rounded-full object-[center_top]"
              />
              </div>
            </div>
            <div className="flex-grow p-4 md:p-6 flex flex-col justify-center">
              <h3 className="text-3xl sm:text-3xl lg:text-5xl font-extrabold text-black mb-4">
                Chairman
              </h3>
              <p className="text-2xl sm:text-3xl lg:text-3xl my-4 font-semibold">
                Elnar Salpekov
              </p>
              <p className="text-lg sm:text-xl lg:text-lg text-gray-700 mb-4">
                Provides overall project management, strategic planning and interaction with government agencies and partners.
              </p>
              <p className="text-lg sm:text-xl lg:text-lg text-gray-700 mb-4">
                +7 705 633 9158, NIS PHM Astana
              </p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-white my-[70px] text-center">Deputies</h1>
          <div className='mt-10 grid gap-10 md:grid-cols-3'>
            <div className='p-10 rounded-2xl shadow-lg bg-white'>
              <div className="relative h-[300px] w-[300px] hidden xl:flex">
                <Image src="/danial.png" alt="Заместитель" fill style={{ objectFit: "cover" }} className='rounded-full mx-auto object-[center_left]' />
              </div>
              <h2 className='text-3xl font-bold text-center pt-5'>Daniyal Isabekov</h2>
              <p className='text-lg text-center mt-4 text-gray-30'>+7 776 566 4014</p>
              <p className='text-lg mt-4 font-semibold'>Achievements:</p>
              <ul className="pt-3">
                <li>Vice-President of OQU</li>
                <li>Summer programs at Yale (YYGS), Stanford (SPCSI), Harvard (HUIRSP)</li>
                <li>Recognized as one of the 50 young leaders of Kazakhstan by the US Embassy in 2022</li>
                <li>Exchange program between NIS and the International School of Hannover</li>
                <li>Various volunteer, organizational, sports, and club activities</li>
              </ul>
            </div>

            <div className='p-10 rounded-2xl shadow-lg bg-white'>
              <div className="relative h-[300px] w-[300px] hidden xl:flex">
                <Image src="/zhanel.JPG" alt="Заместитель" fill style={{ objectFit: "cover" }} className='rounded-full mx-auto object-[-50px]' />
              </div>
              <h2 className='text-3xl font-bold text-center pt-5'>Zhaner Kuatbekova</h2>
              <p className='text-lg text-center mt-4 text-gray-30'>+7 776 120 5485, NIS IB Astana</p>
              <p className='text-lg mt-4 font-semibold'>Achievements:</p>
              <ul className="pt-3">
                <li>Member of Kazakhstan’s debate team for WSDC Serbia 2024</li>
                <li>Business partner and marketing head of The Argument, an online debate school training 500+ people</li>
                <li>Internships at Astana Hub and Bolashak</li>
              </ul>
            </div>

            <div className='p-10 rounded-2xl shadow-lg bg-white'>
              <div className="relative h-[300px] w-[300px] hidden xl:flex">
                <Image src="/alikhan.PNG" alt="Заместитель" fill style={{ objectFit: "cover" }} className='rounded-full object-[center_-50px]' />
              </div>
              <h2 className='text-3xl font-bold text-center pt-5'>Alikhan Serikov</h2>
              <p className='text-lg text-center mt-4 text-gray-30'>+7 776 566 4014, NIS FMN Astana</p>
              <p className='text-lg mt-4 font-semibold'>Achievements:</p>
              <ul className="pt-3">
                <li>Trained 300+ children in design for free</li>
                <li>Opened two free educational clubs, helping low-income families learn English</li>
                <li>Created his own design studio, Beyne Graphics</li>
                <li>Member of an award-winning robotics team</li>
                <li>Developing a social startup aimed at helping people in various situations</li>
                <li>Two years of volunteering experience</li>
              </ul>
            </div>
          </div>

          <div className='mt-10 grid gap-10 md:grid-cols-2'>
            <div className='p-10 rounded-2xl shadow-lg bg-white'>
              <h2 className='text-3xl font-bold text-center pt-5'>Central Committee</h2>
              <p className='text-lg text-center mt-4 text-gray-30'>The core of the organization responsible for coordination and strategic planning. Includes ministers and department heads who lead the main directions of Ziyatker.</p>
            </div>
            <div className='p-10 rounded-2xl shadow-lg bg-white'>
              <h2 className='text-3xl font-bold text-center pt-5'>Senate</h2>
              <p className='text-lg text-center mt-4 text-gray-30'>Representatives from each NIS school who contribute to the project through internship organization and participation in educational initiatives. Currently, the Senate has 44 members from all NIS schools.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ministries Section */}
      <div className="relative flex flex-col items-center pb-24 mb-20">
            <div className="w-full max-w-7xl px-8">
              <h1 className="text-4xl sm:text-5xl font-bold my-10 text-center">
                Ministries
              </h1>

              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {ministries.map((ministry) => (
                  <div
                    key={ministry.id}
                    className="p-6 rounded-2xl shadow-lg bg-white flex flex-col justify-between"
                  >
                    <h2 className="text-3xl font-bold text-center mb-4">
                      {ministry.title_en}
                    </h2>
                    <p className="text-lg text-justify text-gray-700">
                      {ministry.desc_en}
                    </p>
                    <div className="mt-6 text-center">
                      <a
                        href={`/en/team/${ministry.id}`}
                        className="text-green-600 hover:underline font-medium"
                      >
                        Details
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    </section>
  );
}

export default Team;
