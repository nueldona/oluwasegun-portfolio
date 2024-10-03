"use client";
import React from "react";
import SectionWrapper from "./utilities/SectionWrapper";
import { project } from "@/types/main";
import ProjectCard from "./utilities/ProjectCard";
import Link from "next/link";
import Image from "next/image";

const ProjectSection = ({
  projects,
  social_link,
}: {
  projects: project[];
  social_link: string;
}) => {
  return (
    <SectionWrapper
      id="projects"
      className="relative pt-12 min-h-[90vh] bg-gradient-to-b from-white to-gray-100/20 dark:from-gray-900 dark:to-gray-900 pb-10"
    >
      <h2 className="text-4xl text-center">Projects</h2>
      <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
        {projects.map((p: project, i: number) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href={social_link}
          target="_blank"
          className="w-fit text-sm md:text-base py-3 px-10 cursor-pointer flex items-center gap-1 rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 hover:dark:bg-blue-800 transition-colors group text-white uppercase tracking-wider shadow-lg duration-300"
        >
          <div>Visit Github</div>
          <Image
            alt="Github gif"
            width={20}
            height={20}
            className="group-hover:translate-x-1 transition-transform"
            unoptimized={true}
            src="https://img.icons8.com/bubbles/100/github.png"
          />
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default ProjectSection;
