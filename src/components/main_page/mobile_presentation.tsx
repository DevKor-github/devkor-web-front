import React, { useState } from "react";
import styled from "styled-components";
import MobileFooter from "./mobileFooter";
import Devkor from "../../../public/assets/img/DevKor.webp";
import Image from "next/image";
import Paragraph from "@/utils/introParagraph";

export interface BoxProps {
    paragraph: {
        [key: number]: string[];
    };
    ParagraphKey?: number;
    isMobile?: boolean;
    title?: string;
    items?: string[] | undefined;
}

const Box: React.FC<BoxProps> = ({ paragraph, ParagraphKey, title, items }) => {
    const [isScrollable, setIsScrollable] = useState(false);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const element = e.target as HTMLDivElement;
        setIsScrollable(element.scrollHeight > element.clientHeight);
    };

    return (
        <div>
            <MobileFooter />
            <BoxWrapper
                className={`box mobile ${isScrollable ? "scrollable" : ""}`}
                onScroll={handleScroll}
            >
                <ImgBox>
                    <Image src={Devkor} alt="Devkor" />
                </ImgBox>
                <Title>소개</Title>
                <Divider />

                <Introduction>
                    DevKor는 현실의 문제를 다양한 관점에서 바라보고, <br />
                    이를 소프트웨어로 해결하려는 사람들이 모인 고려대
                    <br />
                    학교 소프트웨어 개발 연구 학회입니다.
                </Introduction>
                <Title>비전</Title>
                

<Divider />
{Paragraph[0].map((e1, i) => (
    i % 2 === 0 ? (
        <div key={i} style={{ display: 'flex' }}>
            <div style={{ marginBottom: '50px' }}>
                <LeftBox>{e1}</LeftBox>
            </div>
            {i + 1 < Paragraph[0].length && (
                <div style={{ flex: 1, marginRight:'70px'}}>
                    <Text>{Paragraph[0][i + 1]}</Text>
                </div>
            )}
        </div>
    ) : null
))}
                <MainContent>프로젝트</MainContent>
                <MainContent>스터디</MainContent>
                <MainContent>디자이너</MainContent>
                <MainContent>해커톤</MainContent>
                <MainContent>친목</MainContent>
                <MainContent>리크루팅</MainContent>
            </BoxWrapper>
        </div>
    );
};





const Divider = styled.div`
    width: 50px;
    height: 1px;
    background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));
    margin: 0 auto;
    margin-bottom: 55px;
    margin-top: 10px;
`;



const LeftBox = styled.div`
    width: 120px;
    height: 120px;
    margin-left: 50px;
    background-color: #9c89c8;
    flex-shrink: 0;
    font-family: "NanumSquare";
    font-style: normal;
    font-weight: 10;
    font-size: 11.5px;
    color: #ffffff;
    margin-right: 10px;
    text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
    display: flex;
`;

const Text = styled.p`
    font-family: "NanumSquare";
    font-style: normal;
    font-weight: 10;
    font-size: 12px;
    color: #ffffff;
    text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.6);
`;

const Title = styled.p`
    font-family: "NanumSquare";
    font-style: normal;
    font-weight: 10;
    font-size: 17px;
    /* identical to box height */
    justify-content: center;
    align-items: center;
    color: #ffffff;
    text-align: center;
    text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.6);
    position: relative;
`;

const Introduction = styled.p`
    font-family: "NanumSquare";
    font-style: normal;
    font-weight: 10;
    font-size: 11.5px;
    /* identical to box height */
    justify-content: center;
    align-items: center;
    color: #ffffff;
    text-align: center;
    text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.6);
    margin-bottom: 55px;
`;

const MainContent = styled.div<{ size?: string }>`
    font-size: 15px;
    text-align: center;
    font-weight: 300;
    margin-right: 15px;
    margin-left: 15px;
    margin-top: 40px;
    line-height: 150px;
    font-family: "NanumSquare";
    color: #ffffff;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
    background: linear-gradient(
        180deg,
        rgba(78, 35, 172, 0.15) 0%,
        rgba(84, 23, 219, 0.3) 0.01%,
        rgba(86, 19, 232, 0.65) 73.12%,
        rgba(86, 19, 232, 0.9) 100%
    );
`;

const ImgBox = styled.div`
    padding: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        max-width: 60%;
        height: auto;
        text-align: center;
    }
`;

const BoxWrapper = styled.div`
    /*background color*/
    background: linear-gradient(
        180deg,
        rgba(78, 35, 172, 0.15) 0%,
        rgba(84, 23, 219, 0.3) 0.01%,
        rgba(86, 19, 232, 0.65) 17%,
        rgba(86, 19, 232, 0.9) 100%
    );
`;

export default Box;
