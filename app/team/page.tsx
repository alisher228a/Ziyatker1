import Image from 'next/image';
import React from 'react';
import { fetchMinistries } from '../lib/data';

const Team = async () =>  {

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
              Наша команда "<span className="text-green-50">Ziyatker</span>"
            </h1>
          </div>
        </div>
      </div>

      <div className='relative flex flex-col items-center pb-14 bg-green-main mb-10 pt-20'>
        <div className='w-full max-w-7xl px-8'>
          <div className={`flex flex-col md:flex-row w-full max-w-full mb-10 py-10 px-5 sm:px-10 rounded-3xl bg-white shadow-lg overflow-hidden`}>
            <div className="flex-shrink-0 p-4 mx-auto md:mx-0">
              <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[300px] -top-1">
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
                Председатель
              </h3>
              <p className="text-2xl sm:text-3xl lg:text-3xl my-4 font-semibold">
                Елнар Салпеков
              </p>
              <p className="text-lg sm:text-xl lg:text-lg text-gray-700 mb-4">
                Обеспечивает общее руководство проектом, стратегическое планирование и взаимодействие с государственными органами и партнерами.
              </p>
              <p className="text-lg sm:text-xl lg:text-lg text-gray-700 mb-4">
                +7 705 633 9158, НИШ ФМН Астана
              </p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-white my-[70px] text-center">Заместители</h1>
          <div className='mt-10 grid gap-10 md:grid-cols-3'>
            <div className='p-10 rounded-2xl shadow-lg bg-white'>
              <div className="relative h-[300px] w-[300px] hidden xl:flex">
                <Image src="/danial.png" alt="Заместитель" fill style={{ objectFit: "cover" }} className='rounded-full mx-auto object-[center_left]' />
              </div>
              <h2 className='text-3xl font-bold text-center pt-5'>Даниал Исабеков</h2>
              <p className='text-lg text-center mt-4 text-gray-30'>+7 776 566 4014</p>
              <p className='text-lg mt-4 font-semibold'>Достижения:</p>
              <ul className="pt-3">
                <li>Вице-президент OQU</li>
                <li>Летние программы Yale (YYGS), Stanford (SPCSI), Harvard (HUIRSP)</li>
                <li>Признан одним из 50 юных лидеров Казахстана от Американского Посольства в КЗ (2022г.)</li>
                <li>Exchange программа между школой НИШ и международной школой Ганновера</li>
                <li>Различная волонтерская, организационная, спортивная и клубная деятельность</li>
              </ul>
            </div>

            <div className='p-10 rounded-2xl shadow-lg bg-white'>
              <div className="relative h-[300px] w-[300px] hidden xl:flex">
                <Image src="/zhanel.JPG" alt="Заместитель" fill style={{ objectFit: "cover" }} className='rounded-full mx-auto object-[-50px]' />
              </div>
              <h2 className='text-3xl font-bold text-center pt-5'>Жанель Куатбекова</h2>
              <p className='text-lg text-center mt-4 text-gray-30'>+7 776 120 5485, НИШ IB Астана</p>
              <p className='text-lg mt-4 font-semibold'>Достижения:</p>
              <ul className="pt-3">
                <li>Участница сборной Казахстана по дебатам на WSDC Serbia 2024</li>
                <li>Бизнес-партнер и глава маркетинга в онлайн-дебатной школе The Argument, обучившей 500+ человек</li>
                <li>Стажировки в Astana Hub и Bolashak</li>
              </ul>
            </div>

            <div className='p-10 rounded-2xl shadow-lg bg-white'>
              <div className="relative h-[300px] w-[300px] hidden xl:flex">
                <Image src="/alikhan.PNG" alt="Заместитель" fill style={{ objectFit: "cover" }} className='rounded-full object-[center_-50px]' />
              </div>
              <h2 className='text-3xl font-bold text-center pt-5'>Алихан Сериков</h2>
              <p className='text-lg text-center mt-4 text-gray-30'>+7 776 566 4014, НИШ ФМН Астана</p>
              <p className='text-lg mt-4 font-semibold'>Достижения:</p>
              <ul className="pt-3">
                <li>Обучил 300+ детей бесплатно дизайну</li>
                <li>Открыл два клуба по бесплатному обучению, помогает малоимущим семьям получить образование по английскому</li>
                <li>Создал свою дизайн студию - Beyne Graphics</li>
                <li>Участник команды по робототехнике, выигравшей много номинаций</li>
                <li>В разработке социального стартапа, помогающий людям в разных ситуациях</li>
                <li>Волонтер с двухлетним стажем</li>
              </ul>
            </div>
          </div>

          <div className='mt-10 grid gap-10 md:grid-cols-2'>
            <div className='p-10 rounded-2xl shadow-lg bg-white'>
              <h2 className='text-3xl font-bold text-center pt-5'>Центральный комитет</h2>
              <p className='text-lg text-center mt-4 text-gray-30'>Ядро организации, обеспечивающее координацию и стратегическое планирование. В его состав входят министры и главы департаментов, которые руководят ключевыми направлениями работы Ziyatker.</p>
            </div>
            <div className='p-10 rounded-2xl shadow-lg bg-white'>
              <h2 className='text-3xl font-bold text-center pt-5'>Сенат</h2>
              <p className='text-lg text-center mt-4 text-gray-30'>Представители из каждой школы НИШ, которые содействуют проекту через организацию стажировок и участие в образовательных инициативах. На данный момент в Сенате 44 участника из всех школ НИШ.</p>
            </div>
          </div>
          </div>
        </div>

          {/* Ministries Section */}
          <div className="relative flex flex-col items-center pb-24 mb-20">
            <div className="w-full max-w-7xl px-8">
              <h1 className="text-4xl sm:text-5xl font-bold my-10 text-center">
                Министерства
              </h1>

              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {ministries.map((ministry) => (
                  <div
                    key={ministry.id}
                    className="p-6 rounded-2xl shadow-lg bg-white flex flex-col justify-between"
                  >
                    <h2 className="text-3xl font-bold text-center mb-4">
                      {ministry.title}
                    </h2>
                    <p className="text-lg text-justify text-gray-700">
                      {ministry.desc}
                    </p>
                    <div className="mt-6 text-center">
                      <a
                        href={`/team/${ministry.id}`}
                        className="text-green-600 hover:underline font-medium"
                      >
                        Подробнее
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
