import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import MobileFooter from "./mobileFooter";
import Paragraph from "@/utils/introParagraph";

export interface BoxProps {
    Paragraph?: {
        [key: number]: string[];
    };
    ParagraphKey?: number;
    isMobile?: boolean;
    title: string;
    items: string[] | undefined;
}

const Box: React.FC<BoxProps> = ({
    Paragraph,
    ParagraphKey,
    isMobile,
    title,
    items,
}: BoxProps) => {
    const [isScrollable, setIsScrollable] = useState(false);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const element = e.target as HTMLDivElement;
        setIsScrollable(element.scrollHeight > element.clientHeight);
    };

    return (
        <div>
            <MobileFooter />
            <BoxWrapper
                className={`box ${isMobile ? "mobile" : ""} ${
                    isScrollable ? "scrollable" : ""
                }`}
                onScroll={handleScroll}
            >
                <h2>대박</h2>
            </BoxWrapper>
        </div>
    );
};

const BoxWrapper = styled.div`
    /* Add your styles here */
`;

export default Box;
