"use client";
import Image from "next/image";
import { skill } from "@/types/main";
import { useTheme } from "next-themes";

const Skill = ({ name, image }: skill) => {
  const { theme } = useTheme();
  return (
    <div className="flex justify-center items-center gap-2 bg-gray-100 hover:bg-white dark:bg-gray-800 hover:dark:bg-gray-900 hover:shadow-md transition-all duration-200 cursor-pointer py-2 px-4 rounded-md">
      <div title={name}>
        <Image
          alt="skill"
          width={30}
          height={30}
          quality={100}
          className={` ${
            theme === "dark" &&
            (name === "GitHub" ||
            name === "Vercel" ||
            name === "NextJS" ||
            name === "ExpressJS"
              ? "invert"
              : "invert-0")
          }`}
          src={image}
        />
      </div>
      <p className="text-sm md:text-base">{name}</p>
    </div>
  );
};

export default Skill;
