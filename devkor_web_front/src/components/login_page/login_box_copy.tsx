import styled from "styled-components";
import Image from "next/image";
import kakaoVector from "../../../public/assets/img/kakaoVector.webp";
import logo_googleg_48dp from "../../../public/assets/img/logo_googleg_48dp.webp";
import Link from "next/link";

export function LoginBox() {
  return (
    <MainSectionContainer>
      <Basicbox></Basicbox>
      <Basicbox></Basicbox>
      <Link href="/service">
        <MainContent>비밀번호 찾기</MainContent>
      </Link>

      <Link href="/service">
        <Purplebox>로그인</Purplebox>
      </Link>
      <Link href="http://www.naver.com">
        <Basicbox>회원가입</Basicbox>
      </Link>
      <Link href="/service">
        <Smallerbox>
          <PartialSmallerbox>
            <Image src={logo_googleg_48dp} alt="google" />
          </PartialSmallerbox>
          구글로 시작하기
        </Smallerbox>
      </Link>
      <Link href="/service">
        <Smallerbox_y>
          <PartialSmallerbox_y>
            <Image src={kakaoVector} alt="kakaoVector" />
          </PartialSmallerbox_y>
          카카오로 시작하기
        </Smallerbox_y>
      </Link>
    </MainSectionContainer>
  );
}

const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 423px;
  justify-content: center;
`;

const MainContent = styled.div`
  width: 330px;
  height: 16px;
  font-size: 14px;
  text-align: right;
  font-weight: 300;
  margin-right: 1.5px;
  margin-top: 0px;
  background-color: #ffffff;
  line-height: 16px;
  font-family: "NanumSquare";
  color: #393939;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
`;

const Basicbox = styled.div`
  width: 330px;
  height: 56px;
  border: 1px solid gray;

  font-size: 21px;
  text-align: center;
  font-weight: 300;
  margin-right: 1.5px;
  margin-top: 2px;
  margin-bottom: 12px;
  background-color: rgba(0, 0, 0, 0);
  line-height: 56px;
  font-family: "NanumSquare";
  color: #5613e8;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
`;
const Purplebox = styled.div`
  width: 330px;
  height: 56px;

  font-size: 20px;
  text-align: center;
  align-items: center;

  font-weight: 300;
  margin-right: 1.5px;
  margin-top: 55.75px;
  margin-bottom: 12px;
  background-color: #5613e8;
  line-height: 56px;
  font-family: "NanumSquare";
  color: #ffffff;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
`;
const Smallerbox = styled.div`
  width: 329.3px;
  height: 49px;
  border: 1px solid gray;
  font-size: 15px;
  text-align: center;

  margin-right: 1.5px;
  margin-top: 137px;
  margin-bottom: 12px;
  background-color: #ffffff;
  line-height: 49px;
  font-family: "NanumSquare";
  color: #000000;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
`;

const PartialSmallerbox = styled.div`
  width: 40px;
  height: 45px;
  float: left;
  text-align: center;

  justify-content: center;
  padding-top: 11px;

  background-color: #ffffff;

  font-family: "NanumSquare";
  color: #000000;
`;
const Smallerbox_y = styled.div`
  width: 329.3px;
  height: 49px;

  font-size: 15px;
  text-align: center;

  margin-right: 1.5px;
  margin-top: 2px;
  margin-bottom: 12px;
  background-color: #fee500;
  line-height: 49px;
  font-family: "NanumSquare";
  color: #000000;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
`;
const PartialSmallerbox_y = styled.div`
  width: 40px;
  height: 49px;
  float: left;

  padding-top: 12.5px;
  justify-content: center;

  text-align: center;
  background-color: #fee500;
  line-height: 49px;
  font-family: "NanumSquare";
  color: #000000;
`;
