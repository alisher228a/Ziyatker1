import { fetchMinistries } from '@/app/lib/data';
import Image from 'next/image';
import React from 'react';

const Team = async () =>  {

  const ministries = await fetchMinistries();
  
  return (
    <section className='font-inter'>
      <div
        className="relative font-inter font-extrabold padding-container flex flex-col gap-20 pt-20 md:gap-28 lg:pt-20 xl:flex-row mt-20 bg-cover bg-center text-white"
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
              Біздің команда "<span className="text-green-50">Ziyatker</span>"
            </h1>
          </div>
        </div>
      </div>

      <div className='font-inter relative flex flex-col items-center pb-24 bg-green-500 mb-20 pt-20'>
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
                Төраға
              </h3>
              <p className="text-2xl sm:text-3xl lg:text-3xl my-4 font-semibold">
                Елнар Салпеков
              </p>
              <p className="text-lg sm:text-xl lg:text-lg text-gray-700 mb-4">
              Жобаны жалпы басқаруды, стратегиялық жоспарлауды және мемлекеттік органдармен және серіктестермен өзара іс-қимылды қамтамасыз етеді.
              </p>
              <p className="text-lg sm:text-xl lg:text-lg text-gray-700 mb-4">
                +7 705 633 9158, НИШ ФМН Астана
              </p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-white my-[70px] text-center">Орынбасарлар</h1>
          <div className='mt-10 grid gap-10 md:grid-cols-3'>
            <div className='p-10 rounded-2xl shadow-lg bg-white'>
              <div className="relative h-[300px] w-[300px] hidden xl:flex">
                <Image src="/danial.png" alt="Заместитель" fill style={{ objectFit: "cover" }} className='rounded-full mx-auto object-[center_left]' />
              </div>
              <h2 className='text-3xl font-bold text-center pt-5'>Даниал Исабеков</h2>
              <p className='text-lg text-center mt-4 text-gray-30'>+7 776 566 4014</p>
              <p className='text-lg mt-4 font-semibold'>Жетістіктері:</p>
              <ul className="pt-3">
                <li>OQU Вице-президенті</li>
                <li>Yale (YYGS), Stanford (SPCSI), Harvard (HUIRSP) жазғы бағдарламалары</li>
                <li>Қазақстанның 50 жас көшбасшысының бірі ретінде мойындалды (2022 ж.)</li>
                <li>НЗМ мен Ганновер халықаралық мектебі арасындағы алмасу бағдарламасы</li>
                <li>Әртүрлі волонтерлік, ұйымдастырушылық және клубтық іс-шаралар</li>
              </ul>
            </div>
            <div className='p-10 rounded-2xl shadow-lg bg-white'>
              <div className="relative h-[300px] w-[300px] hidden xl:flex">
                <Image src="/zhanel.JPG" alt="Заместитель" fill style={{ objectFit: "cover" }} className='rounded-full mx-auto object-[-50px]' />
              </div>
              <h2 className='text-3xl font-bold text-center pt-5'>Жанель Куатбекова</h2>
              <p className='text-lg text-center mt-4 text-gray-30'>+7 776 120 5485, НЗМ IB Астана</p>
              <p className='text-lg mt-4 font-semibold'>Жетістіктері:</p>
              <ul className="pt-3">
                <li>WSDC Serbia 2024 бойынша Қазақстанның дебаттар командасының мүшесі</li>
                <li>Онлайн-дебат мектебінің The Argument бизнес серіктесі және маркетинг жетекшісі (500+ адамды оқытқан)</li>
                <li>Astana Hub және Bolashak-та тағылымдамадан өткен</li>
              </ul>
            </div>

            <div className='p-10 rounded-2xl shadow-lg bg-white'>
              <div className="relative h-[300px] w-[300px] hidden xl:flex">
                <Image src="/alikhan.PNG" alt="Заместитель" fill style={{ objectFit: "cover" }} className='rounded-full object-[center_-50px]' />
              </div>
              <h2 className='text-3xl font-bold text-center pt-5'>Алихан Сериков</h2>
              <p className='text-lg text-center mt-4 text-gray-30'>+7 776 566 4014, НЗМ ФМН Астана</p>
              <p className='text-lg mt-4 font-semibold'>Жетістіктері:</p>
              <ul className="pt-3">
                <li>300+ баланы дизайнға тегін оқытты</li>
                <li>Екі тегін оқыту клубын ашты, аз қамтылған отбасыларға ағылшын тілін үйренуге көмектеседі</li>
                <li>Beyne Graphics дизайн студиясын құрды</li>
                <li>Робототехника бойынша көптеген марапаттарға ие болған команданың мүшесі</li>
                <li>Әлеуметтік стартап әзірлеуде, әртүрлі жағдайларда адамдарға көмек көрсетуді мақсат етеді</li>
                <li>Екі жылдық волонтерлік тәжірибесі бар</li>
              </ul>
            </div>
          </div>

          <div className='mt-10 grid gap-10 md:grid-cols-2'>
            <div className='p-10 rounded-2xl shadow-lg bg-white'>
              <h2 className='text-3xl font-bold text-center pt-5'>Орталық комитет</h2>
              <p className='text-lg text-center mt-4 text-gray-30'>Ұйымның үйлестіру мен стратегиялық жоспарлауға жауапты ядросы. Комитетке министрлер мен департамент басшылары кіреді, олар Ziyatker жобасының негізгі бағыттарын басқарады.</p>
            </div>
            <div className='p-10 rounded-2xl shadow-lg bg-white'>
              <h2 className='text-3xl font-bold text-center pt-5'>Сенат</h2>
              <p className='text-lg text-center mt-4 text-gray-30'>Жобаға тәжірибе ұйымдастыру және білім беру бастамаларына қатысу арқылы үлес қосатын НЗМ мектептерінің өкілдері. Қазіргі уақытта Сенатта барлық НЗМ мектептерінен 44 қатысушы бар.</p>
            </div>
          </div>
        </div>
      </div>

                {/* Ministries Section */}
                <div className="relative flex flex-col items-center pb-24 mb-20">
            <div className="w-full max-w-7xl px-8">
              <h1 className="text-4xl sm:text-5xl font-bold my-10 text-center">
                Министрліктер
              </h1>

              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {ministries.map((ministry) => (
                  <div
                    key={ministry.id}
                    className="p-6 rounded-2xl shadow-lg bg-white flex flex-col justify-between"
                  >
                    <h2 className="text-3xl font-bold text-center mb-4">
                      {ministry.title_kz}
                    </h2>
                    <p className="text-lg text-justify text-gray-700">
                      {ministry.desc_kz}
                    </p>
                    <div className="mt-6 text-center">
                      <a
                        href={`/kz/team/${ministry.id}`}
                        className="text-green-600 hover:underline font-medium"
                      >
                        Толығырақ
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
