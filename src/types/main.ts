type skill = {
  name: string;
  image: string;
  category: string;
};

type project = {
  name: string;
  image: string;
  techstack: string;
  category: string;
  links: {
    visit: string;
    code: string;
    video: string;
  };
};

type main = {
  name?: string;
  titles?: string[];
  heroImage?: string;
  shortDesc?: string;
  techStackImages?: string[];
};

type about = {
  name?: string,
  aboutImage: string;
  aboutImageCaption: string;
  title: string;
  about: string;
  resumeUrl: string;
  callUrl: string;
};

type social = {
  name?: string;
  icon: string;
  link: string;
};

type data = {
  main: main;
  about: about;
  skills: skill[];
  projects?: project[];
  socials?: social[];
};

export type { data, main, about, skill, project, social };
