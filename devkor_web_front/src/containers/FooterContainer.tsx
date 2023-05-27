import React from "react";
import FooterPresentation from "@/components/main_page/FooterPresentation";

const FooterContainer = () => {
  const githubUrl = "https://github.com/DevKor-github";
  const instagramUrl = "https://www.instagram.com/devkor.ku/";

  return (
    <FooterPresentation githubUrl={githubUrl} instagramUrl={instagramUrl} />
  );
};

export default FooterContainer;
