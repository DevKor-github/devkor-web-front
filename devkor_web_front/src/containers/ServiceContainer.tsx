import Image from "next/image";
import styled from "styled-components";
import github_mark_white1 from "../../public/assets/img/icons8-github-64.webp";
import Vector from "../../public/assets/img/Vector.svg";
import Link from "next/link";
import { StaticImageData } from "next/image";

interface serviceContainerProps {
    img: string | StaticImageData;
    serviceName: any;
    content: any;
    serviceURL: any;
    githubURL: any;
}

export default function ServiceContainer({
    img,
    serviceName,
    content,
    serviceURL,
    githubURL,
}: serviceContainerProps) {
    return (
        <Box>
            <LogoWrapper>
                <LogoBox>
                    <Image priority src={img} alt={serviceName} />
                </LogoBox>
            </LogoWrapper>
            <MainContent size="big">{content}</MainContent>
            <Picture>
                <a href={serviceURL}>
                    <LinkBox>
                        <Image src={Vector} alt="arrow" width={44} />
                    </LinkBox>
                </a>
                <a href={githubURL}>
                    <LinkBox2>
                        <Image
                            src={github_mark_white1}
                            alt="github"
                            width={46}
                        />
                    </LinkBox2>
                </a>
            </Picture>
        </Box>
    );
}

const MainContent = styled.div<{ size?: string }>`
    width: 794px;
    height: 336px;
    font-size: 27px;
    text-align: center;
    font-weight: 300;
    margin-right: 0px;
    margin-top: 0px;
    background-color: rgba(255, 255, 255, 1);
    line-height: 336px;
    font-family: "NanumSquare";
    color: black;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Picture = styled.div`
    width: 122px;
    height: 336px;
    font-size: 18px;
    text-align: center;
    font-weight: 300;
    margin-top: 0px;
    background-color: rgba(255, 255, 255, 1);
`;
const Box = styled.div`
    background-color: #ffffff;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    width: 1252px;
    height: 336px;
    margin-bottom: 64px;
    margin-left: auto;
    margin-right: auto;

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
const LinkBox = styled.div`
    background-color: rgba(86, 19, 232, 1);

    width: 122px;
    height: 168px;
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LinkBox2 = styled.div`
    background-color: rgba(67, 59, 83, 1);

    width: 122px;
    height: 168px;
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LogoBox = styled.div`
    background-color: rgba(255, 255, 255, 1);

    width: 284px;
    height: 284px;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: -1px -1px 5px rgba(128, 128, 128, 1);

    img {
        display: block;
        margin: auto;
    }
`;

const LogoWrapper = styled.div`
    width: 336px;
    height: 336px;

    display: flex;
    align-items: center;
    justify-content: center;
`;
