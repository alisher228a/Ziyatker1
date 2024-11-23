import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="font-sans flex-col flexCenter overflow-hidden pb-24">
      <div className="max-container padding-container relative w-full justify-between lg:flex lg:space-x-12">
        <div className="relative w-full lg:w-1/2 flex flex-col justify-start">
        <div className="relative mx-auto w-[70%] hidden md:flex h-[400px] z-10">
        <Image
              src="/nis_building.jpeg"
              alt="NIS"
              fill
              style={{ objectFit: "cover" }}
              className="realtive shadow-lg"
            />
          </div>

          <div className="relative mt-[-120px] bg-green-main p-10 pt-40 text-white z-0">
            <h2 className="text-[35px] xl:text-[75px] md:text-[55px] font-extrabold pb-8">ABOUT US</h2>
            <p className="text-lg">
              The Ziyatker project is aimed at developing the talents and professional skills of students 
              from Nazarbayev Intellectual Schools (NIS) through internships, debates, and other initiatives that promote 
              the integration of youth into various sectors of the economy and public service.
            </p>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 flex flex-col">
            <h2 className="text-[35px] xl:text-[75px] md:text-[55px] font-extrabold pb-8 text-green-main mt-20 lg:mt-0">OUR GOALS</h2>
            <p className="text-lg">
              To create opportunities for NIS high school students to gain practical experience in 
              government agencies and private companies, as well as to foster the development of leadership 
              qualities and civic engagement.
            </p>

          <div className="mt-20 lg:mt-40"> {/* Adjusted margin-top here */}
            <h2 className="text-[35px] xl:text-[75px] md:text-[55px] font-extrabold pb-8 text-green-main">VALUES</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Support for the youth's aspiration for development.</li>
              <li>Transparency and accessibility of internships.</li>
              <li>Strengthening the connection between the educational process and practical activities.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
