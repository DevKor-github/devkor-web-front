import React from "react";
import MobileServicePage from "@/components/main_page/mobile_service";
import {StaticImageData} from "next/image";
import styled from "styled-components";
import { handleClientScriptLoad } from "next/script";
import {useState} from "react";

interface MobileServiceContainerProps {
    img: string | StaticImageData;
    serviceName: any;
    content: any;
    serviceURL: any;
    githubURL: any;
    isMobile: boolean;
  }
  
const ServiceContainer:React.FC<MobileServiceContainerProps>=({
    img,
    serviceName,
    content,
    serviceURL,
    githubURL,
    isMobile,
}: MobileServiceContainerProps) =>{
    const [showRedirect, setShowRedirect] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");
const handleContentClick=(url:string)=>{
    setRedirectUrl(url);
    setShowRedirect(true);}
return (
    
    <MobileServicePage
    img={img}
    serviceName={}
    content={}
    serviceURL={}
    githubURL={}
    //onClick={handleContentClick}
    showRedirect={}
    redirectUrl={}
    isMobile={true}
    onContentClick={handleContentClick} 

    />
    
);
}

