import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="font-inter flex-col flexCenter overflow-hidden pb-24">
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
            <h2 className="text-[35px] xl:text-[55px] md:text-[45px] font-extrabold pb-8">БІЗ ТУРАЛЫ</h2>
            <p className="text-lg">
              Ziyatker жобасы Назарбаев Зияткерлік Мектептер (НЗМ) оқушыларының 
              таланттары мен кәсіби дағдыларын дамытуға, жастарды әр түрлі 
              экономикалық салалар мен мемлекеттік қызметке интеграциялауға ықпал ететін 
              стажировкалар, дебаттар және басқа бастамалар арқылы жүзеге асырылады.
            </p>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 flex flex-col">
            <h2 className="text-[35px] xl:text-[55px] md:text-[45px] font-extrabold pb-8 text-green-main mt-20 lg:mt-0">БІЗДІҢ МАҚСАТТАРЫМЫЗ</h2>
            <p className="text-lg">
              НИШ-тың жоғары сынып оқушыларына мемлекеттік органдар мен жеке 
              компанияларда практикалық тәжірибе алуға мүмкіндік жасау және 
              көшбасшылық қасиеттер мен азаматтық белсенділікті дамыту.
            </p>

          <div className="mt-20 lg:mt-40">
            <h2 className="text-[35px] xl:text-[55px] md:text-[45px] font-extrabold pb-8 text-green-main">ҚҰНДЫЛЫҚТАР</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Жастардың даму ұмтылысын қолдау.</li>
              <li>Стажировкалардың ашықтығы мен қолжетімділігі.</li>
              <li>Оқу процесі мен практикалық қызмет арасындағы байланысты нығайту.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
