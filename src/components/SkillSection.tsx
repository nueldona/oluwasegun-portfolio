"use client";
import SectionWrapper from "./utilities/SectionWrapper";
import SkillCard from "./utilities/SkillCard";
import { skill } from "@/types/main";
import Image from "next/image";
import BgImage from "@/public/herobgc.jpg";
import { useTheme } from "next-themes";

const AboutSkills = ({ skillData }: { skillData: skill[] }) => {
  const { theme } = useTheme();
  return (
    <SectionWrapper
      id="skills"
      className={`${
        theme === "dark" && "bg-gray-900"
      } relative min-h-[90vh] pt-12 overflow-hidden`}
    >
      <div className="absolute -z-10 min-h-[90vh] h-full w-full">
        <Image
          src={BgImage}
          fill
          className="object-bottom object-contain"
          quality={100}
          alt={"background image"}
          priority
        />
      </div>
      <h2 className="text-4xl text-center">Tech Stack</h2>
      <div className="max-w-[750px] lg:w-3/4 2xl:w-3/5 my-12 mx-auto px-5 md:px-12 flex flex-wrap justify-center place-items-center gap-6">
        {skillData.map((s: any, i: number) => (
          <SkillCard key={i} {...s} />
        ))}
      </div>
    </SectionWrapper>
  );
};
export default AboutSkills;
