import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { project } from "@/types/main";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const ProjectCard = ({ project }: { project: project }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col gap-2 bg-white dark:bg-gray-800 rounded-lg p-4"
    >
      <div className="max-w-sm">
        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
          <Image
            alt="skill"
            width={500}
            height={500}
            quality={100}
            src={
              "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
            }
          />
          <div className="py-6 px-8 rounded-lg bg-white">
            <h1 className="text-gray-700 font-bold mb-3 hover:text-gray-900 hover:cursor-pointer">
              I'm supper dog for you.
            </h1>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
              labore. Ea debitis beatae sequi deleniti.
            </p>
            <div className="flex justify-between items-center mt-4">
              <Link
                href=""
                target="_blank"
                className="w-fit text-sm md:text-base p-2 cursor-pointer flex items-center gap-1 rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 hover:dark:bg-blue-800 transition-colors group text-white uppercase tracking-wider shadow-lg duration-300"
              >
                <BsGithub />
              </Link>
              <Link
                href=""
                target="_blank"
                className="w-fit text-sm md:text-base p-2 cursor-pointer flex items-center gap-1 rounded-md bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 hover:dark:bg-gray-800 transition-colors group text-white uppercase tracking-wider shadow-lg duration-300"
              >
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
