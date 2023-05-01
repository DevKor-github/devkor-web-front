import styled from "styled-components";

export function MainSectionBox() {
    return (
        <MainSectionContainer>
            <MainContent size="big">비전</MainContent>
            <MainContent>프로젝트</MainContent>
            <MainContent size="big">스터디</MainContent>
            <MainContent>해커톤</MainContent>
            <MainContent>디자이너</MainContent>
            <MainContent>친목</MainContent>
            <MainContent>리크루팅</MainContent>
        </MainSectionContainer>
    );
}

const MainSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 1200px;
    height: 600px;
`;

const MainContent = styled.div<{ size?: string }>`
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
`;
