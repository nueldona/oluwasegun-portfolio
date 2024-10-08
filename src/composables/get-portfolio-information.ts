import { main, about, skill, social, project } from "@/types/main";
const usePortfolioInformation = () => {
  const fetchPersonalDataFromApi = async (): Promise<main> => {
    const response = await fetch("/api/personal_information");
    if (!response.ok) {
      throw new Error("oops! something went wrong.");
    }
    return response.json();
  };
  const fetchAboutDataFromApi = async (): Promise<about> => {
    const response = await fetch("/api/about_information");
    if (!response.ok) {
      throw new Error("oops! something went wrong.");
    }
    return response.json();
  };
  const fetchTechStackDataFromApi = async (): Promise<skill[]> => {
    const response = await fetch("/api/tech_stack_information");
    if (!response.ok) {
      throw new Error("oops! something went wrong.");
    }
    return response.json();
  };
  const fetchSocialDataFromApi = async (): Promise<social[]> => {
    const response = await fetch("/api/social_information");
    if (!response.ok) {
      throw new Error("oops! something went wrong.");
    }
    return response.json();
  };
  const fetchProjectDataFromApi = async (): Promise<project[]> => {
    const response = await fetch("/api/project_information");
    if (!response.ok) {
      throw new Error("oops! something went wrong.");
    }
    return response.json();
  };
  return {fetchPersonalDataFromApi, fetchAboutDataFromApi, fetchTechStackDataFromApi, fetchSocialDataFromApi, fetchProjectDataFromApi};
};

export default usePortfolioInformation;