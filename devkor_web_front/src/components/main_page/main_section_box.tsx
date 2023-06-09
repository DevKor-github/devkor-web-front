import styled from "styled-components";

export function MainSectionBox() {
    return (
        <MainSectionContainer>
            <MainContent size="big">비전</MainContent>
            <MainContent>프로젝트</MainContent>
            <MainContent size="big">스터디</MainContent>
            <MainContent>해커톤</MainContent>
            <MainContent>디자이너</MainContent>
            <MainContent>친목</MainContent>
            <MainContent>리크루팅</MainContent>
        </MainSectionContainer>
    );
}

const MainSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 1200px;
    height: 600px;
`;

const MainContent = styled.div<{ size?: string }>`
    width: ${(props) => (props.size === "big" ? "798px" : "398px")};
    font-size: 24px;
    text-align: center;
    font-weight: 300;
    margin-right: 1.5px;
    margin-top: 2px;
    background-color: rgba(0, 0, 0, 0.1);
    line-height: 200px;
    font-family: "NanumSquare";
    color: #ffffff;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
`;




interface FooterPresentationProps {
  githubUrl: string;
  instagramUrl: string;
}

const FooterPresentation: React.FC<FooterPresentationProps> = ({ githubUrl, instagramUrl }) => {
  return (
    <footer className="footer-container">
      <div className="row">
        <div className="col-md-3">
          <div className="footer-title">SERVICES</div>
          <div className="footer-text">Service 1</div>
          <div className="footer-text">Service 2</div>
          <div className="footer-text">Service 3</div>
          <div className="footer-text">Service 4</div>
        </div>
        <div className="col-md-3">
          <div className="footer-title">KUDOG MESSZLE</div>
          <div className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div className="col-md-3">
          <div className="footer-title">CONTACT</div>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="footer-link">Github</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
        </div>
        <div className="col-md-3">
          <div className="footer-title">COPYRIGHT</div>
          <div className="footer-text">&#169; 2023 Your Company, Inc.</div>
          <div className="footer-text">All Rights Reserved</div>
          <div className="footer-text">Privacy Policy</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer-text">Designed and developed by Your Name</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPresentation;
