"use client";
import AboutSection from "@/components/AboutSection";
import HeaderSection from "@/components/HeaderSection";
import HeroSection from "@/components/HeroSection";
import { data } from "@/types/main";
import getPortfolioInformation from "@/composables/get-portfolio-information";
import { useQuery } from "react-query";
import Loading from "@/app/loading";
import ErrorSection from "@/components/ErrorSection";
import AboutSkills from "@/components/SkillSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import SocialSection from "@/components/SocialSection";
import FooterSection from "@/components/FooterSection";

const {
  fetchPersonalDataFromApi,
  fetchAboutDataFromApi,
  fetchTechStackDataFromApi,
  fetchSocialDataFromApi,
} = getPortfolioInformation();
const fetchAllData = async (): Promise<data> => {
  const [main, about, skills, socials] = await Promise.all([
    fetchPersonalDataFromApi(),
    fetchAboutDataFromApi(),
    fetchTechStackDataFromApi(),
    fetchSocialDataFromApi()
  ]);
  return {
    main,
    about,
    skills,
    socials
  };
};
export default function Home() {
  const { data, error, isLoading } = useQuery("allData", fetchAllData);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(errorMessage);
    return <ErrorSection error={errorMessage} />;
  }
  return (
    <>
      <HeaderSection />
      {data?.main && <HeroSection main={data.main} />}
      {data?.socials && <SocialSection socials={data.socials} />}
      {data?.about && <AboutSection about={data.about} />}
      {data?.skills && <AboutSkills skillData={data.skills} />}
      {data?.skills && <ProjectSection projects={[{}] as any} />}
      {data?.skills && <ContactSection />}
      {data?.socials && data?.main && (<FooterSection socials={data.socials} name={data?.main?.name} />)}
    </>
  );
}
