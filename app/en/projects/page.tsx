import React from 'react';
import Image from 'next/image';
import { fetchProjects } from '@/app/lib/data';

const Projects = async () => {
  const projects = await fetchProjects();

  return (
    <section className="font-manrope flex flex-col justify-center items-center overflow-hidden bg-green-500 my-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="z-20 flex w-full flex-col items-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mt-10">Projects</h1>
        </div>

        <div className="mt-10 w-full flex flex-col items-center">
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col md:flex-row w-full max-w-full mb-10 py-10 px-5 sm:px-10 rounded-3xl bg-white shadow-lg overflow-hidden ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-shrink-0 p-4 mx-auto md:mx-0">
                  {project.image && (
                    <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[300px]">
                      <Image
                        src={project.image}
                        alt={project.title_en || 'Project Image'}  // Fallback alt text
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-full shadow-2xl"
                      />
                    </div>
                  )}
                </div>

                <div className="flex-grow p-4 md:p-6 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-black mb-4">
                    {project.title_en}
                  </h3>
                  <p className="text-lg sm:text-base lg:text-lg text-gray-700 mb-6">
                    {project.desc_en}
                  </p>
                  <a
                    href={`projects/${project.id}`}
                    className="text-blue-500 hover:underline text-sm sm:text-base"
                  >
                    Read more &gt;
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-lg sm:text-xl">There are no available projects</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;