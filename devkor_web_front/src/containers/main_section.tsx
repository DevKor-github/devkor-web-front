import { MainSectionBox } from "@/components/main_page/main_section_box";
import { MainSectionTitle } from "../components/main_page/main_section_title";
import styled from "styled-components";


export function MainSection() {
    const introduction =
        "DevKor는 현실의 문제를 다양한 관점에서 바라보고, 이를 소프트웨어로 해결하려는 사람들이 모인 고려대학교 소프트웨어 개발 연구 학회입니다.";

    return (
        <MainSectionWrapper>
            <MainSectionTitle>{introduction}</MainSectionTitle>
            <MainSectionBox></MainSectionBox>
        </MainSectionWrapper>
    );
}

const MainSectionWrapper = styled.div`
    background: linear-gradient(
        180deg,
        rgba(78, 35, 172, 0.15) 0%,
        rgba(84, 23, 219, 0.3) 0.01%,
        rgba(86, 19, 232, 0.65) 53.12%,
        rgba(86, 19, 232, 0.9) 100%
    );
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 1178px;
`;
