import Image from 'next/image';
import React from 'react';
import { fetchNewsBy6 } from '@/app/lib/data';
import { StarIcon, UserIcon } from '@heroicons/react/24/solid';

const News = async () => {
  const newsList = await fetchNewsBy6();

  return (
    <section className="font-inter flex-col flex items-center overflow-hidden py-24">
      <div className="max-container px-4 w-full">
        {/* News Header */}
        <div className="w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Жаңалықтар арнасы</h1>
        </div>

        <br />

        {/* News List */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(newsList) && newsList.length > 0 ? (
            newsList.map((newsItem) => (
              <div
                key={newsItem.id}
                className="p-0 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:cursor-pointer flex flex-col justify-between"
              >
                {/* News Image */}
                <div className="relative h-[300px] w-full">
                  <Image
                    src={newsItem.img.startsWith('/') ? newsItem.img : `${newsItem.img}`}
                    alt="cover_for_news"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-lg"
                  />
                </div>

                {/* News Description */}
                <div className="p-5">
                  <p className="text-lg inline-flex">
                    <a
                      href={`/news/${newsItem.id}`}
                      className="hover:underline"
                    >
                      {newsItem.desc_kz}
                    </a>
                    <span className="flex items-start ml-2">
                      <StarIcon className="text-green-500 size-6 mr-1" /> {newsItem.rating}
                    </span>
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="mt-auto">
                  {/* Deadline Block */}
                  <div className="bg-red-500 text-white text-center py-2 font-semibold rounded-xl">
                  <a className="hover:underline" href={`/kz/news/${newsItem.id}`}>
                  {newsItem.deadline
                    ? `Соңғы мерзім: ${new Date(newsItem.deadline).toLocaleDateString('ru-RU')}`
                    : 'Мерзімі көрсетілмеген'}
                  </a>
                  </div>

                  {/* Meta Information */}
                  <div className="flex justify-between items-center p-5 rounded-b-lg border-t">
                    <div className="text-sm text-gray-500">
                      {new Date(newsItem.updatedAt).toLocaleDateString('ru-RU')}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <UserIcon className="text-green-500 h-6 w-6" />
                      <span className="ml-2">{newsItem.views} көріністер</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Жаңалықтар жоқ</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;