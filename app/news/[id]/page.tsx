import Image from 'next/image';
import React from 'react';
import { fetchNewsById, increaseViewNews } from '@/app/lib/data';
import { StarIcon, UserIcon } from '@heroicons/react/24/solid';

const NewsDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch news data by ID
  const news = await fetchNewsById(id);

  // If news is not found, return a not found message
  if (!news) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Новость не найдена
      </div>
    );
  }

  // Split the explanation into separate sentences by newline
  const news_explanation = news.explanation;

  // Increase view count for the news
  increaseViewNews(id);

  return (
    <section className="font-manrope max-w-screen-lg mx-auto px-4 my-[100px]">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative w-full h-72 md:h-96">
          <Image
            src={news.img}
            alt={news.desc}  // Use description as alt text for better accessibility
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>

        {/* Title Section */}
        <div className="flex items-center justify-center">
          <h1 className="text-[22px] sm:text-3xl md:text-4xl min-[420px]:text-2xl font-extrabold text-left text-[#333333]">
            {news.desc}
          </h1>
        </div>
      </div>

      <div className="mt-5">
      <div className="text-[#333333] text-[18px] font-normal leading-8">
        {typeof news_explanation === 'string' ? (
          <div dangerouslySetInnerHTML={{ __html: news_explanation }} />
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html: news_explanation.join('<br>'),
            }}
          />
        )}
      </div>
    </div>
    
      {/* Meta Info Section */}
      <div className="flex sm:flex-row flex-wrap justify-between items-center mt-6 border-t pt-6 text-gray-500 text-sm md:text-base">
        <p>{new Date(news.updatedAt).toLocaleDateString('ru-RU')}</p>
        <div className="flex items-center">
          <UserIcon className="text-green-500 w-6 h-6" />
          <p>{news.views} просмотров</p>
        </div>
        <div className="flex items-center">
          <StarIcon className="text-green-500 w-6 h-6 mr-1" />
          <p>{news.rating}</p>
        </div>
      </div>
    </section>
  );
};

// Enable dynamic params
export const dynamicParams = true;

export default NewsDetails;
