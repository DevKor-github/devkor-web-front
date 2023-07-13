import React, { useState } from "react";
import styled from "styled-components";
import MobileFooter from "./mobileFooter";
import Devkor from "../../../public/assets/img/DevKor.webp";
import Image, { StaticImageData } from "next/image";
import MobileParagraph from "../../utils/mobileIntroParagraph";
import Modal from "./mobile_modal";
import project from "../../../public/assets/img/project.webp";
import study from "../../../public/assets/img/study.webp";
import hackaton from "../../../public/assets/img/hackaton.webp";
import designer from "../../../public/assets/img/designer.webp";
import recruiting from "../../../public/assets/img/recruiting.webp";
import communication from "../../../public/assets/img/communication.webp";

interface ModalDataType {
  title: string;
  content: string;
  image: StaticImageData | null;
}

const Box: React.FC = () => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [ModalData, setModalData] = useState<ModalDataType>({
    title: "",
    content: "",
    image: null,
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement;
    setIsScrollable(element.scrollHeight > element.clientHeight);
  };

  const handleBoxClick = (title: string) => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";

    const images: { [name: string]: StaticImageData } = {
      프로젝트: project,
      스터디: study,
      해커톤: hackaton,
      디자이너: designer,
      리크루팅: recruiting,
      친목: communication,
    };

    setModalData((current) => {
      return {
        ...current,
        title: title,
        content: MobileParagraph[title as keyof typeof MobileParagraph],
        image: images[title],
      };
    });
  };

  const handleModalOff = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const Boxes = [
    "프로젝트",
    "스터디",
    "디자이너",
    "해커톤",
    "친목",
    "리크루팅",
  ];

  return (
    <div>
      {isModalOpen && (
        <Modal
          title={ModalData.title}
          content={ModalData.content}
          modalOff={handleModalOff}
          image={ModalData.image}
        />
      )}

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
        <Container>
          <LeftBox>문제해결 </LeftBox>
          <Text>
            단순히 개발 실력만을 갖춘
            <br />
            개발 학회를 벗어나려 합니다.
            <br /> 여러 분야의 사람들이 모여
            <br /> 다양한 시선으로 문제를 바라
            <br />
            보고, 그것을 소프트웨어로 <br />
            해결해나가고자 합니다.
          </Text>
        </Container>
        <Container>
          <LeftBox>공유 </LeftBox>
          <Text>
            공유하는 문화를 유지하고자
            <br />
            합니다. 함께 스터디와 프로젝
            <br />
            트를 진행하며 발전합니다. 그 <br /> 과정에서 코드 리뷰를 통해 빠
            <br />
            르게 개발 경험을 쌓고 성장해 <br />
            나가고자 합니다.
          </Text>
        </Container>

        {Boxes.map((el, i) => (
          <MainContent
            key={i}
            onClick={() => {
              handleBoxClick(el);
            }}
          >
            {el}
          </MainContent>
        ))}
      </BoxWrapper>
      <MobileFooter />
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 55px;
`;

const LeftBox = styled.div`
  width: 120px;
  height: 120px;
  background: var(--unnamed, rgba(255, 255, 255, 0.4));
  margin-right: 1rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 2px 4px 0px rgba(0, 0, 0, 0.25) inset;

  flex-shrink: 0;
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 10;
  font-size: 11.5px;
  color: #ffffff;
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
  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
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

  margin-bottom: 55px;
`;

export default Box;
