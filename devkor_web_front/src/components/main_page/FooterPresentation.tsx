import React from 'react';
import styled from 'styled-components';

interface FooterPresentationProps {
  githubUrl: string;
  instagramUrl: string;
}



const FooterPresentation: React.FC<FooterPresentationProps> = ({ githubUrl, instagramUrl }) => {
  return (
    <FooterContainer>
       <div className="row">
      <div className="col-md-1">
        </div>
      </div>
      <div className="row">
      <div className="col-md-3">
      <div className="footer-title">서비스</div>
      <div className="footer-text">KUDOG</div>
      <div className="footer-text">MESSZLE</div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-3">
  <div className="footer-title">링크</div>
  <div className="footer-link-text">
    <a href={githubUrl} target="_blank" rel="noreferrer" className="footer-link">Github</a>
    <a href={instagramUrl} target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
  </div>
  </div>
  </div>
  <div className="row">
<div className="col-md-3"> 
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<div className="footer-text">COPYRIGHT @2023 DevKor</div>

</div>  
</div>

<div className="row">
<div className="col-md-3">
<div className="footer-text">회장 노정훈 |010-5219-6349 <br/> devkor.apply@gmail.com</div>

</div>
</div>
<div className="row">
<div className="col-md-3">

</div>  
</div>

    </FooterContainer>
  );
};

export default FooterPresentation;

const FooterContainer = styled.footer`
background-color: #433B53;
  padding-top: 50px;
  padding-bottom: 20px;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  `