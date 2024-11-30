import Image from 'next/image';
import React from 'react';
import { fetchMinistryById } from '@/app/lib/data'; 

const MinistryDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch the ministry details
  const ministry = await fetchMinistryById(id);

  // Split ministry tasks into individual sentences
  const tasks: string[] = ministry.tasks
    .split('.')
    .filter((task: string) => task.trim() !== "");

  return (
    <section className="font-manrope my-[100px]">
      {/* Title Section */}
      <div className="text-center px-8 py-16">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-black">
          {ministry.title}
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
            <h3 className="text-3xl font-bold mb-4">ОПИСАНИЕ</h3>
            <p className="text-xl">{ministry.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Tasks */}
            <div>
              <h3 className="text-3xl font-bold mb-4">ЗАДАЧИ</h3>
              <ul className="list-disc pl-6 space-y-2 text-xl">
                {tasks.map((task: string, index: number) => (
                  <li key={index}>{task.trim()}.</li>
                ))}
              </ul>
            </div>

            {/* Goals */}
            <div>
              <h3 className="text-3xl font-bold mb-4">ЦЕЛЬ</h3>
              <p className="text-xl">{ministry.goal}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinistryDetails;
