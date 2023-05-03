import { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";
import styled from "styled-components";
import Image from "next/image";

interface MainContentProps {
    index: number;
    size: string;
    children: string;
    onMouseEnter: MouseEventHandler;
    onMouseLeave: MouseEventHandler;
    mouseOn: string;
    render: "normal" | "hover" | "none";
    innerImg: StaticImageData;
    mainText: {
        [key: number]: [string];
    };
}

export function MainContent({
    index,
    size,
    children,
    onMouseEnter,
    onMouseLeave,
    render,
    mouseOn,
    innerImg,
    mainText,
}: MainContentProps) {
    return (
        <MainContentWrapper
            key={index}
            size={size}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={render}
        >
            {render === "hover" && (
                <HoverBox>
                    <ImgWrapper>
                        <Image width={286} src={innerImg} alt={children} />
                    </ImgWrapper>
                    <TextWrapper>
                        {mainText[index].map((el, i) => {
                            if (i % 2 == 0) {
                                return <h4>{el}</h4>;
                            } else {
                                return <p>{el}</p>;
                            }
                        })}
                    </TextWrapper>
                </HoverBox>
            )}
            {render === "normal" && children}
        </MainContentWrapper>
    );
}

const MainContentWrapper = styled.div<{ size?: string }>`
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

    &.none {
        display: none;
    }

    &.hover {
        width: 100%;
        height: 100%;
    }
`;

const HoverBox = styled.div`
    height: 600px;
    display: flex;
    justify-content: space-around;
`;

const ImgWrapper = styled.div`
    width: 20%;
    display: block;
    margin-left: 100px;
    margin-top: auto;
    margin-bottom: auto;

    & > img {
        display: block;
    }
`;

const TextWrapper = styled.div`
    width: 50%;
    margin: auto;
    line-height: 32px;
    & > h4 {
        float: left;
        display: inline;
        margin-top: 30px;
        text-align: start;
        font-size: 20px;
        border-bottom: 1px solid white;
    }

    & > p {
        margin-top: 72px;
        text-align: left;
        font-size: 20px;
    }
`;
