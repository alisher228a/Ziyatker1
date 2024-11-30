import Image from 'next/image';
import React from 'react';
import { fetchMinistryById } from '@/app/lib/data'; 

const MinistryDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch the ministry details
  const ministry = await fetchMinistryById(id);

  return (
    <section className="font-inter my-[100px]">
      {/* Title Section */}
      <div className="text-center px-8 py-16">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-black">
          {ministry.title_kz}
        </h1>
        <h2 className="text-5xl sm:text-6xl font-bold text-green-600 mt-4">
          "ZIYATKER"
        </h2>
      </div>

      {/* Green Background Section */}
      <div className="w-full bg-green-500 py-20 text-white">
        {/* Text Section with Max Width */}
        <div className="max-w-screen-xl mx-auto px-10 sm:px-20 lg:px-40">
          <div className="mb-10">
            <h3 className="text-3xl font-bold mb-4">СИПАТТАМА</h3>
            <p className="text-xl">{ministry.desc_kz}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Tasks */}
            <div>
              <h3 className="text-3xl font-bold mb-4">ТАПСЫРМАЛАР</h3>
              <p className="text-xl">{ministry.tasks_kz}</p>
            </div>

            {/* Goals */}
            <div>
              <h3 className="text-3xl font-bold mb-4">МАҚСАТТАР</h3>
              <p className="text-xl">{ministry.goal_kz}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinistryDetails;
