import React from "react";
import Devkor from "../../../public/assets/img/DevKor.webp";
import Image from "next/image";
import Box from "@/components/main_page/mobile_presentation";

interface BoxContainerProps {
  boxes: { title: string; items?: string[] }[];
}

const BoxContainer: React.FC<BoxContainerProps> = ({
  boxes,
}: BoxContainerProps) => {
  const introduction =
    "DevKor는 현실의 문제를 다양한 관점에서 바라보고, 이를 소프트웨어로 해결하려는 사람들이 모인 고려대학교 소프트웨어 개발 연구 학회입니다.";
  return (
    <div className="box-container">
      <div></div>
      <Image src={Devkor} alt="Devkor" width={564} />
      <h3>소개</h3>
      <div className="boxes">
        {/* {boxes.map((box, index) => (
          <Box
            key={index}
            title={box.title}
            items={box.items}
            isMobile={(isMobile = true)}
          />
        ))} */}
      </div>
    </div>
  );
};
