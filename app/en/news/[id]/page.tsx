import Image from 'next/image';
import React from 'react';
import { fetchNewsById, increaseViewNews } from '@/app/lib/data';
import { StarIcon, UserIcon } from '@heroicons/react/24/solid';

const NewsDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch news data by ID
  const news = await fetchNewsById(id);

  const news_explanation = news.explanation_en;
  increaseViewNews(id)

  if (!news) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        The news was not found
      </div>
    );
  }

  return (
    <section className="font-manrope max-w-screen-lg mx-auto px-4 my-[100px]">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="relative w-full h-72 md:h-96">
        <Image
          src={news.img}
          alt="Team working together"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-left">
          {news.desc_en}
        </h1>
      </div>
    </div>

    <div className="mt-10">
      <h2 className="text-xl md:text-3xl font-semibold mb-6">Details</h2>
      <hr /> <br />
      <div className="text-gray-700 text-base md:text-lg">
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

    <div className="flex sm:flex-row flex-wrap justify-between items-center mt-6 border-t pt-6 text-gray-500 text-sm md:text-base">
      <p>{new Date(news.updatedAt).toLocaleDateString('ru-RU')}</p>
      <div className='flex items-center'>
        <UserIcon className='text-green-50 size-6'/>
        <p>{news.views} views</p>
      </div>
      <div className='flex items-center'>
        <StarIcon className='text-green-50 size-6 mr-1' />
        <p>{news.rating}</p>
      </div>
    </div>
  </section>
  );
};

export const dynamicParams = true;

export default NewsDetails;