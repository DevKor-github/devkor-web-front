import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface FooterPresentationProps {
  urls: {
    githubUrl: string;
    instagramUrl: string;
    kudogUrl: string;
    meezzleUrl: string;
  };
}

const FooterPresentation: React.FC<FooterPresentationProps> = ({ urls }) => {
  return (
    <FooterContainer>
      <div className="row">
        <div className="col-md-3">
          <FooterTitle>서비스</FooterTitle>
          <FooterLinkText>
            <Link href={urls.kudogUrl} className="footer-link">
              KUDOG
            </Link>
            <Link href={urls.meezzleUrl} className="footer-link">
              MEEZZLE
            </Link>
          </FooterLinkText>
        </div>

        <div className="col-md-3">
          <FooterTitle>링크</FooterTitle>
          <FooterLinkText>
            <Link href={urls.githubUrl} className="footer-link">
              Github
            </Link>
            <Link href={urls.instagramUrl} className="footer-link">
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
          <FooterText className="right">
            회장 노정훈 | 010-5219-6349 <br /> devkor.apply@gmail.com
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
  padding-bottom: 20px;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 150px;
  padding-right: 150px;
  flex-wrap: nowrap;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

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
  color: #fff;
  font-family: NanumSquare;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 16px;
  color: #ffffff;
`;

const FooterText = styled.div<{ className?: string }>`
  margin-bottom: 16px;
  color: #ffffff;
  text-align: center;
  font-family: "NanumSquare";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;

  line-height: ${(props) => (props.className === "right" ? "32px" : "16px")};

  margin-top: ${(props) => (props.className === "copyright" ? "90px" : "0px")};
`;

const FooterLinkText = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  text-align: center;
  font-family: "NanumSquare";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;

  line-height: 16px;

  & > a {
    margin-bottom: 16px;
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
