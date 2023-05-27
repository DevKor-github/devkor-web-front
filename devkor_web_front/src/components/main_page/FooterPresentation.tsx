import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface FooterPresentationProps {
  githubUrl: string;
  instagramUrl: string;
}

const FooterPresentation: React.FC<FooterPresentationProps> = ({
  githubUrl,
  instagramUrl,
}) => {
  return (
    <FooterContainer>
      <div className="row">
        <div className="col-md-3">
          <FooterTitle>서비스</FooterTitle>
          <FooterText>KUDOG</FooterText>
          <FooterText>MEEZZLE</FooterText>
        </div>

        <div className="col-md-3">
          <FooterTitle>링크</FooterTitle>
          <FooterLinkText>
            <Link href={githubUrl} className="footer-link">
              Github
            </Link>
            <Link href={instagramUrl} className="footer-link">
              Instagram
            </Link>
          </FooterLinkText>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <FooterText className="copyright">COPYRIGHT @2023 DevKor</FooterText>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <FooterText>
            회장 노정훈 | 010-5219-6349 <br />
            <br /> devkor.apply@gmail.com
          </FooterText>
        </div>
      </div>
    </FooterContainer>
  );
};

export default FooterPresentation;

const FooterContainer = styled.footer`
  background-color: #433b53;
  padding-top: 50px;
  height: 267px;
  padding-bottom: 20px;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 150px;
  padding-right: 150px;
  flex-wrap: nowrap;

  .row {
    display: flex;
    text-align: center;
  }
  .col-md-3 {
    margin-left: 25px;
    margin-right: 25px;
  }
`;

const FooterTitle = styled.div`
  font-weight: 500;
  margin-bottom: 24px;
  color: #ffffff;
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
`;

const FooterText = styled.div<{ className?: string }>`
  margin-bottom: 16px;
  color: #ffffff;
  font-family: "NanumSquare";
  font-size: 16px;
  margin-top: ${(props) => (props.className === "copyright" ? "70%" : "0px")};
`;

const FooterLinkText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "NanumSquare";
  font-size: 16px;

  a {
    margin-bottom: 16px;
    color: #ffffff;
  }
`;

const FooterLink = styled.a`
  display: block;
  margin-bottom: 10px;
  color: #ffffff;
  text-decoration: none;

  :hover {
    text-decoration: underline;
    color: #ffffff;
  }
`;
