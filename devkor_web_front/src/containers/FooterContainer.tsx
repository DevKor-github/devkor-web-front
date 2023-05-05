import React from 'react';
import FooterPresentation  from "@/components/main_page/FooterPresentation";

interface FooterContainerProps {
  githubUrl: string;
  instagramUrl: string;
}


const FooterContainer: React.FC<FooterContainerProps> = ({ githubUrl, instagramUrl }) => {
  return <FooterPresentation githubUrl={githubUrl} 
  instagramUrl={instagramUrl} />;
};

export default FooterContainer;
