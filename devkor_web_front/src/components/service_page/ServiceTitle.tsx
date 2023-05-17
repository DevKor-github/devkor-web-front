import Image from "next/image";
import DevKor_logo2 from "../../../public/assets/img/DevKor_logo2.webp";
import styled from "styled-components";

export function ServiceTitle() {
  return (
    <TitleContainer>
      <div>
        <ContainerIcon>▶ </ContainerIcon>
        <Container>
          <Image src={DevKor_logo2} alt="Devkor" width={158} />
        </Container>
        <Container>
          <MainSectionText>에서 운영 중인 서비스</MainSectionText>
        </Container>
      </div>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-top: 170px;
  margin-bottom: 93px;
  margin-left: 280px;

  img {
    margin-bottom: 64px;
  }
  width: 1252px;
`;

const MainSectionText = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 300;
  font-size: 45px;
  line-height: 45px;
  /* identical to box height */

  color: black;

  text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.6);
  margin-top: 0px;
`;
const Container = styled.div`
  float: left;
  margin-right: 10px;
`;
const ContainerIcon = styled.div`
  float: left;
  color: rgba(86, 19, 232, 1);
  margin-right: 10px;
  margin-top: 0px;
`;
