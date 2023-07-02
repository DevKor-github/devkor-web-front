import { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";
import styled from "styled-components";
import Image from "next/image";
import X from "/public/assets/img/X.webp";

interface MainContentProps {
  index: number;
  size: string;
  children: string;
  onClick: MouseEventHandler;
  onQuit: MouseEventHandler;
  clicked: string;
  innerImg: StaticImageData;
  mainText: {
    [key: number]: string[];
  };
}

export function MainContent({
  index,
  size,
  children,
  onClick,
  onQuit,
  clicked,
  innerImg,
  mainText,
}: MainContentProps) {
  return (
    <MainContentWrapper
      key={index}
      size={size}
      onClick={onClick}
      className={clicked === children ? "clicked" : ""}
    >
      {clicked === children && (
        <DetailBox>
          <Image src={X} alt="X" onClick={onQuit} />
          <ImgWrapper>
            <Image priority width={286} src={innerImg} alt={children} />
          </ImgWrapper>
          <TextWrapper>
            {mainText[index].map((el, i) => {
              if (i % 2 == 0) {
                return <h4 key={i}>{el}</h4>;
              } else {
                return <p key={i}>{el}</p>;
              }
            })}
          </TextWrapper>
        </DetailBox>
      )}
      {clicked === "" && children}
    </MainContentWrapper>
  );
}

const MainContentWrapper = styled.div<{ size?: string; className: string }>`
  width: ${(props) => (props.size === "big" ? "798px" : "398px")};
  height: 200px;
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
  cursor: pointer;
  transition: background-color 0.4s;

  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  @keyframes click {
    0% {
      width: 800px;
    }

    100% {
      width: 1200px;
      height: 600px;
    }
  }
  &.clicked {
    background-color: rgba(0, 0, 0, 0.3);
    animation-name: click;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
  }
`;

const DetailBox = styled.div`
  height: 600px;
  display: flex;
  justify-content: space-around;

  & > img {
    margin-top: 50px;
    margin-left: 50px;
    cursor: pointer;
  }

  width: 100%;
  cursor: auto;
`;

const ImgWrapper = styled.div`
  width: 20%;
  display: block;
  margin-left: 50px;
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
