import React from 'react';
import './footer.css';

interface FooterPresentationProps {
  githubUrl: string;
  instagramUrl: string;
}



const FooterPresentation: React.FC<FooterPresentationProps> = ({ githubUrl, instagramUrl }) => {
  return (
    <footer className="footer-container">
      <div className="row">
          <div className="footer-title">SERVICES</div>
          <div className="footer-text">KUDOG</div>
          <div className="footer-text">MESSZLE 2</div>
          <div className="footer-text">Service 3</div>
          <div className="footer-text">Service 4</div>
        <div className="col-md-3">
          <div className="footer-title">CONTACT</div>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="footer-link">Github</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
        </div>
        <div className="col-md-3">
          <div className="footer-title">COPYRIGHT @2023 DevKor</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer-text">회장 노정훈 |010-5219-6349 devkor.apply@gmail.com</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPresentation;
