import Image from "next/image";
import Devkor from "../../../public/assets/img/DevKor.webp";
import styled from "styled-components";

export function MainSectionTitle({ ...props }) {
  return (
    <TitleContainer>
      <Image src={Devkor} alt="Devkor" width={564} />
      <MainSectionText>{props.children}</MainSectionText>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 170px;
  margin-bottom: 93px;

  img {
    margin-bottom: 64px;
  }
`;

const MainSectionText = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  /* identical to box height */

  color: #ffffff;

  text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.6);
`;
