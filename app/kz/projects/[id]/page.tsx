import Image from 'next/image';
import React from 'react';
import { fetchProjectById } from '@/app/lib/data'; 

const ProjectDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch the project details
  const project = await fetchProjectById(id);

  if (!project) {
    return <div>Жоба табылған жоқ</div>;
  }

  // Split project details into sentences
  const sentences_goal = project.goal_kz.split('.').filter((sentence: string) => sentence.trim() !== "");
  const sentences_tasks = project.tasks_kz.split('.').filter((sentence: string) => sentence.trim() !== "");
  const achievements = project.achievements_kz.split('\n').filter((achievement: string) => achievement.trim() !== "");

  // Default color
  let color = "bg-green-main";

  if (project.title === "DebateNIS") {
      color = 'bg-[#0C235E]';
  }
  if (project.title === "Стажировки в Сенатах Республики Казахстан") {
      color = "bg-[#42446B]";
  }
  if (project.title === "Республиканская олимпиада по истории") {
      color = "bg-[#4A5C34]";
  }

  return (
    <section className="font-inter max-w-screen-lg mx-auto px-6 my-[100px] bg-white">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-5xl sm:text-4xl font-bold">{project.title_kz}</h1>
        <div className="flex items-center">
          <Image
            src={project.image} 
            alt={project.title_kz}
            width={400}
            height={400}
            className="rounded-full shadow-2xl"          
          />
        </div>
      </div>

      {/* Goals and Tasks Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Goals */}
        <div className={`${color} text-white p-6 rounded-lg shadow-lg`}>
          <h2 className="text-2xl font-semibold mb-4">МАҚСАТТАР:</h2>
          <ul className="list-disc pl-6 space-y-2">
            {sentences_goal.map((sentence, index) => (
              <li key={index} className="text-base">
                {sentence.trim()}.
              </li>
            ))}
          </ul>
        </div>

        {/* Tasks */}
        <div className={`${color} text-white p-6 rounded-lg shadow-lg`}>
          <h2 className="text-2xl font-semibold mb-4">МІНДЕТТЕР:</h2>
          <ul className="list-disc pl-6 space-y-2">
            {sentences_tasks.map((sentence, index) => (
              <li key={index} className="text-base">
                {sentence.trim()}.
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Project Essence Section */}
      <div className={`${color} text-white p-8 rounded-lg shadow-lg mt-10`}>
        <h2 className="text-2xl font-semibold mb-6">ЖОБА ТУРАЛЫ:</h2>
        <p className="text-base">
          {project.desc_kz}
        </p>
      </div>

      {/* Achievements Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-semibold mb-6">ЖЕТІСТІКТЕР</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className={`${color} text-white p-6 rounded-lg shadow-lg`}>
              <h3 className="text-xl font-semibold mb-4">{index + 1}</h3>
              <p>{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const dynamicParams = true;

export default ProjectDetails;
