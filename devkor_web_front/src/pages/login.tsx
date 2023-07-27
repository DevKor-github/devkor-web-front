import Image from "next/image";
import DevKor_logo2 from "../../public/assets/img/DevKor_logo2.webp";
import styled from "styled-components";
import { LoginBox } from "../components/login_page/login_box_copy";

export default function Login() {
  return (
    <TitleImage>
      <Image src={DevKor_logo2} alt="Devkor" width={432} />
      <LoginBox></LoginBox>
    </TitleImage>
  );
}
const TitleImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 86px;
  margin-bottom: 93px;

  img {
    margin-bottom: 64px;
  }
`;
