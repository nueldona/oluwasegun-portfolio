"use client";
import React, { useState } from "react";
import SectionWrapper from "./utilities/SectionWrapper";
import { project } from "@/types/main";
import ProjectCard from "./utilities/ProjectCard";

const ProjectSection = ({ projects }: { projects: project[] }) => {
  const [filteredProjects, setFilteredProjects] = useState(
    projects as project[]
  );
  const [viewAll, setViewAll] = useState(false);
  return (
    <SectionWrapper
      id="projects"
      className="relative pt-12 min-h-[90vh] bg-gradient-to-b from-white to-gray-100/20 dark:from-gray-900 dark:to-gray-900"
    >
      <h2 className="text-4xl text-center">Projects</h2>
      <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
        {filteredProjects
          .slice(0, viewAll ? filteredProjects.length : 6)
          .map((p: project, i: number) => (
            <ProjectCard key={i} project={p} />
          ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectSection;
