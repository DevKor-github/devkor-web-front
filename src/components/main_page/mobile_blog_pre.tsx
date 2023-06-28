import React, {useState} from "react";
import styled from "styled-components";
import MobileFooter from "./mobileFooter";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import miniLogo from "../../../public/assets/img/miniLogo.svg";
import DevKor_logo2 from "../../../public/assets/img/DevKor_logo2.webp";
import eye_open from "../../../public/assets/img/eye-open-svgrepo-com 1.svg";
import heart from "../../../public/assets/img/heart-svgrepo-com 1.svg";
import comment from "../../../public/assets/img/comment.svg";

import github_mark_white1 from "../../../public/assets/img/icons8-github-64.webp";
import Vector from "../../../public/assets/img/Vector.svg";
import ServiceData from "@/utils/service_data";
import BlogPost from "@/utils/blogpost";


interface MobileBlogProps {
    img: string | StaticImageData;
    title: any;
    content: any;
    writer: any;
    tag: any;
    like: any;
    view:any;
    comments:any;
    onContentClick: (url:string)=>void;
    
  }
  
  const MobileBlogPage: React.FC<MobileBlogProps> = ({
    img,
    title,
    content,
    writer,
    tag,
    like,
    view,
    comments,
    onContentClick
  }) => {
    return (
      <Background>
        <HeaderContainer>
          <Link href="/">
            <Image src={miniLogo} alt="DevKor" width={40} style={{ marginRight: "190px", marginLeft: "15px" }} />
          </Link>
          <Image src={DevKor_logo2} alt="DevKor" width={60} style={{ marginLeft: "16px", marginTop: "10px" }} />
          <Text>블로그</Text>
        </HeaderContainer>
        <MobileFooter />
        <Space>최신순</Space>
     {Object.values(BlogPost).map((a,i)=>(
     <ServiceBox key={i}> 
            <LogoBox>
            </LogoBox>
            <Content>
            <div >
                <div style={{display:'flex', marginLeft:'1px'}}>
                <span style={{ fontSize: '14px', marginRight: '9px' }}>{a[0]}</span>
                <span style={{ fontSize: '12px', opacity:'30%' }}>{a[1]}</span>
                </div>
                
            <div style={{marginTop:'8px',display:'flex',marginLeft:'1px'}}>
            {a[2]}
            </div>
            <div style={{ marginTop:'8px', display:'flex',marginLeft:'1px'}}>
            <span style={{ fontSize: '10px', marginRight: '9px',backgroundColor: 'rgba(0, 0, 0, 0.10)', padding: '2px'  }}>{a[3]}</span>
            <span style={{ fontSize: '10px', marginRight: '9px' ,backgroundColor: 'rgba(0, 0, 0, 0.10)', padding: '2px' }}>{a[4]}</span>
            </div>

            <div style={{marginTop:'8px',display:'flex',marginLeft:'1px',opacity:'30%'}}>
            <img src={eye_open}  style={{ marginRight: '6.75px' }} />

                {a[5]} 
            <img src={heart} style={{ marginRight: '6.75px' }} />
                {a[6]}  
            <img src={comment} style={{ marginRight: '6.75px' }} />
                {a[7]}
            </div>

            </div>
           
                    
            </Content>
        </ServiceBox>
      ))}
      </Background>
    );
  };
export default MobileBlogPage;

const Content = styled.div<{ size?: string }>`
    width: 794px;
    height: 336px;
    font-size: 10px;
    text-align: center;
    color: black;
    font-weight: 300;
    margin-right: 0px;
    margin-top: 0px;
    margin: 0;
    padding:15px;
    font-family: "NanumSquare";
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
    display: flex;
    justify-content: center;
    align-items: center;
`;


const LogoBox = styled.div`
background-color: #D9D9D9;

width: 300px;
height: 95px;

margin-left: 20px;
display: flex;
align-items: center;


img {
    display: block;
    margin: auto;
}
`;

const Text = styled.div`
  color: black;
  margin-top: 10px;
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;

`;

const HeaderContainer = styled.div`
  color: rgba(86, 19, 232, 1);
  font-size: 24px;
  margin-left: 10px;
  margin-top: 58px;
  display: inline-flex;
`;

const ServiceBox = styled.div`
background-color: #ffffff;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 1px 1px 4px 1px #D9D9D9;    
    margin-left:16px;
    margin-right:16px;

    width: 358px;
    height: 130px;
    margin-bottom: 15px;
    margin-top:16px;
    

    animation-name: bottomUp;
    animation-duration: 1s;

    @keyframes bottomUp {
        0% {
            opacity: 0;
            transform: translateY(350px);
        }
        100% {
            opacity: 1;
        }
    }

    &:last-child {
        margin-bottom: 200px;
    }

`;

const Space = styled.div`
  margin-top: 6px;
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  display: flex;
  justify-content:flex-end;
  margin-right:16px;

`;



const Background = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`;
