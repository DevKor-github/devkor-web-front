import styled from "styled-components";
import { MainContent } from "../components/main_page/main_section_content";
import { MouseEventHandler, useState } from "react";
import vision from "../../public/assets/img/vision.webp";
import project from "../../public/assets/img/project.webp";
import study from "../../public/assets/img/study.webp";
import hackaton from "../../public/assets/img/hackaton.webp";
import designer from "../../public/assets/img/designer.webp";
import communication from "../../public/assets/img/communication.webp";
import recruiting from "../../public/assets/img/recruiting.webp";
import { StaticImageData } from "next/image";
import introParagraph from "../utils/introParagraph";

interface MainSectionBoxProps {
  contents: Array<[title: string, bigWidth: boolean]>;
}

export function MainSectionBox({ contents }: MainSectionBoxProps) {
  const [clicked, setClicked] = useState<string>("");
  const images: Array<StaticImageData> = [
    vision,
    project,
    study,
    hackaton,
    designer,
    communication,
    recruiting,
  ];

  const handleClick: MouseEventHandler = (e) => {
    if (clicked === "") setClicked(e.currentTarget.innerHTML);
  };
  const handleQuit: MouseEventHandler = (e) => {
    e.stopPropagation();
    setClicked("");
  };

  return (
    <MainSectionContainer>
      {contents.map((el, i) => {
        return (
          (clicked === "" || clicked === el[0]) && (
            <MainContent
              index={i}
              key={i}
              size={el[1] ? "big" : ""}
              onClick={handleClick}
              clicked={clicked}
              onQuit={handleQuit}
              innerImg={images[i]}
              mainText={introParagraph}
            >
              {el[0]}
            </MainContent>
          )
        );
      })}
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
  overflow: hidden;
`;
