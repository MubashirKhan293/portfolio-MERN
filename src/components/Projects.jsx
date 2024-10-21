import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b py-4 border-neutral-900">
      <h1 className="text-center text-4xl my-20">Projects</h1>
      <div>
        {PROJECTS.map((project, Index) => (
          <div key={Index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
             <h6 className="mb-2 font-semibold">{project.title}</h6>
             <p className="mb-4 text-neutral-400">{project.description}</p>
             {
                project.technologies.map((tech, Index)=>(
                <span key={Index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                    {tech}
                </span>
                ))
             }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
