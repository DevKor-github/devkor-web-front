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
                <Image width={286} src={innerImg} alt={children} />
            )}
            {children}
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

        & img {
            display: block;
            position: relative;
            left: 151px;
            top: 157px;
        }
    }
`;
