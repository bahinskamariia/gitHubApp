export const useLanguages = (projects) => {
  const languages = projects && projects.map((project) => project.language);

  return {
    languages: [...new Set(languages)].map((item) => ({ label: item, value: item})),
  }
};
