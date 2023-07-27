import styled from "styled-components";

export function LoginBox() {
  return (
    <MainSectionContainer>
      <MainContent>이메일</MainContent>
      <Basicbox></Basicbox>
      <MainContent>닉네임</MainContent>
      <Basicbox></Basicbox>
      <MainContent>학교 이메일</MainContent>
      <Partialbox></Partialbox>
      <Partialbox2>인증번호 전송</Partialbox2>
      <Partialbox></Partialbox>
      <Partialbox2>확인</Partialbox2>
      <MainContent>비밀번호</MainContent>

      <Basicbox></Basicbox>
      <MainContent>비밀번호 확인</MainContent>
      <Basicbox></Basicbox>
      <Finishbox>완료</Finishbox>
    </MainSectionContainer>
  );
}

const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 423px;
`;

const MainContent = styled.div`
  width: 432px;
  height: 21px;
  font-size: 21px;
  text-align: left;
  font-weight: 300;
  margin-right: 1.5px;
  margin-top: 2px;
  background-color: #ffffff;
  line-height: 21px;
  font-family: "NanumSquare";
  color: #5613e8;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
`;

const Basicbox = styled.div`
  width: 423px;
  height: 56.25px;
  border: 1px solid gray;

  font-size: 21px;
  text-align: center;
  font-weight: 300;
  margin-right: 1.5px;
  margin-top: 2px;
  margin-bottom: 12px;
  background-color: rgba(0, 0, 0, 0.1);
  line-height: 200px;
  font-family: "NanumSquare";
  color: #ffffff;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
`;
const Finishbox = styled.div`
  width: 423px;
  height: 56px;

  font-size: 16px;
  text-align: center;
  align-items: center;

  font-weight: 300;
  margin-right: 1.5px;
  margin-top: 2px;
  margin-bottom: 12px;
  background-color: #5613e8;
  line-height: 56px;
  font-family: "NanumSquare";
  color: #ffffff;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
`;
const Partialbox = styled.div`
  width: 290px;
  height: 56px;
  border: 1px solid gray;

  margin-right: 1.5px;
  margin-top: 2px;
  margin-bottom: 12px;
  background-color: #ffffff;
  line-height: 200px;
  font-family: "NanumSquare";
  color: #ffffff;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
`;
const Partialbox2 = styled.div`
  width: 124px;
  height: 56px;
  border: 1px solid gray;
  font-size: 16px;
  text-align: center;
  align-items: center;
  font-weight: 300;

  margin-right: 1.5px;
  margin-top: 2px;
  margin-bottom: 12px;
  background-color: #5613e8;
  line-height: 56px;
  font-family: "NanumSquare";
  color: #ffffff;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
`;
