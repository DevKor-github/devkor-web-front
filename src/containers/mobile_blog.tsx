import React from "react";
import MobileServicePage from "@/components/main_page/mobile_service";
import {StaticImageData} from "next/image";
import styled from "styled-components";
import { handleClientScriptLoad } from "next/script";
import {useState} from "react";

interface MobileServiceContainerProps {
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
  
const ServiceContainer:React.FC<MobileServiceContainerProps>=({
    img,
    title,
    content,
    writer,
    tag,
    like,
    view,
    comments,
}: MobileServiceContainerProps) =>{
    const [showRedirect, setShowRedirect] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");
const handleContentClick=(url:string)=>{
    setRedirectUrl(url);
    setShowRedirect(true);}
return (
    
    <MobileServicePage
    img={img}
    title={title}
    content={content}
    //onClick={handleContentClick}
    view={view}
    isMobile={true}
    onContentClick={handleContentClick} 
    comments={comments}
    tag={tag}


    />
    
);
}

