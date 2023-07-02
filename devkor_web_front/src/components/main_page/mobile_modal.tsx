import styled from "styled-components";
import X from "../../../public/assets/img/X.webp";
import Image, { StaticImageData } from "next/image";
import Line from "../../../public/assets/img/Line.svg";

interface ModalProps {
  title: string;
  content: string;
  modalOff: () => void;
  image: StaticImageData | null;
}

export default function Modal({ title, content, modalOff, image }: ModalProps) {
  return (
    <ModalBox>
      <Image priority src={X} alt="X" width={20} onClick={modalOff} />
      <ModalContent>
        {image && <Image src={image} alt={title} width={50} />}
        <h2>{title}</h2>
        <Image className="line" src={Line} alt="구분선" />
        <p>{content}</p>
        {title === "스터디" ? (
          <>
            <h2>세미나</h2>
            <Image className="line" src={Line} alt="구분선" />
            <p>
              자유롭게 세미나를 열 수 있습니다. Spring, Web GL, DevOps, 딥러닝,
              캐글 등 다양한 주제로 세미나가 진행되고 있습니다. DevKor는 다양한
              주제의 세미나가 열릴 수 있도록 많은 지원을 하고 있습니다.
            </p>
          </>
        ) : (
          <Image className="line" src={Line} alt="구분선" />
        )}
      </ModalContent>
    </ModalBox>
  );
}

const ModalBox = styled.div`
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 5vh;
  z-index: 1;
  position: fixed;
  width: 90%;
  height: 80vh;
  background: var(--while-hovering, rgba(0, 0, 0, 0.7));

  & > img {
    margin-top: 23px;
    margin-left: 23px;
  }
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > h2 {
    color: white;
    text-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
    font-size: 16px;
    font-family: NanumSquare;
    font-style: normal;
    font-weight: 300;
    margin-top: 10%;
  }

  & > p {
    width: 240px;
    color: white;
    text-align: center;
    /* text01 */
    text-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
    font-size: 12px;
    font-family: NanumSquare;
    font-style: normal;
    font-weight: 300;
    line-height: 156%;
  }

  .line {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;
