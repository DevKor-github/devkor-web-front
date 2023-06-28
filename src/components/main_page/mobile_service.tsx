import React, {useState} from "react";
import styled from "styled-components";
import MobileFooter from "./mobileFooter";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import miniLogo from "../../../public/assets/img/miniLogo.svg";
import DevKor_logo2 from "../../../public/assets/img/DevKor_logo2.webp";
import github_mark_white1 from "../../../public/assets/img/icons8-github-64.webp";
import Vector from "../../../public/assets/img/Vector.svg";
import ServiceData from "@/utils/service_data";


interface MobileServiceProps {
  img: string | StaticImageData;
  serviceName: any;
  content: any;
  serviceURL: any;
  githubURL: any;
  isMobile: boolean;
  onContentClick: (url:string)=>void;
  showRedirect:boolean;
  redirectUrl:string;
}

const MobileServicePage: React.FC<MobileServiceProps> = ({
  img,
  serviceName,
  content,
  serviceURL,
  githubURL,
  isMobile,
  onContentClick,
  showRedirect,
  redirectUrl,
}) => {
    const [showPopup, setShowPopup]=useState(false);

    const handleContentClick = () => {
        onContentClick(serviceURL);
        setShowPopup(true);
      };
    const handleRedirect=()=>{
      window.location.href=redirectUrl;  //window?
    }
  return (
    <Background>
      <HeaderContainer>
        <Link href="/">
        <Image src={miniLogo} alt="DevKor" width={40} style={{ marginRight: "170px",marginLeft:"34px" }} />
        </Link>
        <Image src={DevKor_logo2} alt="DevKor" width={60} style={{ marginLeft: "10px",marginTop:"10px" }} />
        <Text>서비스</Text>
      </HeaderContainer>
      <MobileFooter />
      <Space></Space>
      {ServiceData.map((a,i)=>(
        <ServiceBox key={i} onClick={handleContentClick}>
            <LogoBox>

            <Image priority src={ a[0]} alt={serviceName} width={75} height={75}/>
            </LogoBox>
            <Content>{a[2]} </Content>
            
        </ServiceBox>
      ))}
        {showRedirect &&(
            <Redirect>
                <Button onClick={handleRedirect}>Redirect</Button>
            </Redirect>
        )}
    {showPopup && (
        <Popup>
          <PopupContent>
            {/* Pop-up content */}
            <Button onClick={handleRedirect}>Redirect</Button>
          </PopupContent>
          <CloseButton onClick={() => setShowPopup(false)}>Close</CloseButton>
        </Popup>
      )}
     
    </Background>
      
  


  );
};

const CloseButton = styled.div`
background-color: rgba(255, 255, 255, 1);

width: 300px;
height: 95px;

margin-left: 20px;
display: flex;
align-items: center;

box-shadow: -0.5px -0.5px 4px rgba(128, 128, 128, 1);

img {
    display: block;
    margin: auto;
}
`;
const PopupContent = styled.div`
background-color: rgba(255, 255, 255, 1);

width: 300px;
height: 95px;

margin-left: 20px;
display: flex;
align-items: center;

box-shadow: -0.5px -0.5px 4px rgba(128, 128, 128, 1);

img {
    display: block;
    margin: auto;
}
`;
const Popup = styled.div`
background-color: rgba(255, 255, 255, 1);

width: 300px;
height: 95px;

margin-left: 20px;
display: flex;
align-items: center;

box-shadow: -0.5px -0.5px 4px rgba(128, 128, 128, 1);

img {
    display: block;
    margin: auto;
}
`;

const Button = styled.div`
background-color: rgba(255, 255, 255, 1);

width: 300px;
height: 95px;

margin-left: 20px;
display: flex;
align-items: center;

box-shadow: -0.5px -0.5px 4px rgba(128, 128, 128, 1);

img {
    display: block;
    margin: auto;
}
`;

const Redirect = styled.div<{ size?: string }>`
    width: 794px;
    height: 336px;
    font-size: 12px;
    text-align: center;
    color: #5613E8;
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

const Content = styled.div<{ size?: string }>`
    width: 794px;
    height: 336px;
    font-size: 12px;
    text-align: center;
    color: #5613E8;
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
background-color: rgba(255, 255, 255, 1);

width: 300px;
height: 95px;

margin-left: 20px;
display: flex;
align-items: center;

box-shadow: -0.5px -0.5px 4px rgba(128, 128, 128, 1);

img {
    display: block;
    margin: auto;
}
`;

const ServiceBox = styled.div`
background-color: #ffffff;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    box-shadow: -1px -1px 5px rgba(128, 128, 128, 1);
    margin-left:20px;
    margin-right:20px;

    width: 90%;
    height: 130px;
    margin-bottom: 64px;
    
    margin-top:10px;

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
height:150px;
`;






const Background = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  position: absolute;
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




export default MobileServicePage;
