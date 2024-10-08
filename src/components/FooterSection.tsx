import React from "react";
import { social } from "@/types/main";

interface FooterSectionProps {
  socials: social[];
  name?: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ name }) => {
  return (
    <footer className="w-full bg-blue-600 dark:bg-gray-800 text-gray-200 dark:text-white mt-10">
      <div className="flex items-center justify-center p-6">
        <p className="text-sm mt-2 md:mt-0 text-center">
          Made with
          <span className="animate-pulse"> ❤️ </span>
          by
          <span className="text-white"> {name || 'Oluwasegun Aiyedona'}</span>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
