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
            <h2 className="text-[35px] xl:text-[75px] md:text-[55px] font-extrabold pb-8">О НАС</h2>
            <p className="text-lg">
              Проект Ziyatker направлен на развитие талантов и профессиональных навыков учащихся 
              Назарбаев Интеллектуальных Школ (НИШ) через стажировки, дебаты и другие инициативы, способствующие 
              интеграции молодежи в различные сферы экономики и государственной службы.
            </p>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 flex flex-col">
            <h2 className="text-[35px] xl:text-[75px] md:text-[55px] font-extrabold pb-8 text-green-main mt-20 lg:mt-0">НАШИ ЦЕЛИ</h2>
            <p className="text-lg">
              Создать возможности для старшеклассников НИШ для получения практического опыта в 
              государственных органах и частных компаниях, а также способствовать развитию лидерских 
              качеств и гражданской активности.
            </p>

          <div className="mt-20 lg:mt-40"> 
            <h2 className="text-[35px] xl:text-[75px] md:text-[55px] font-extrabold pb-8 text-green-main">ЦЕННОСТИ</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Поддержка стремления молодежи к развитию.</li>
              <li>Прозрачность и доступность стажировок.</li>
              <li>Укрепление связи между учебным процессом и практической деятельностью.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
