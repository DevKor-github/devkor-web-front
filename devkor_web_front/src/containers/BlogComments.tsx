import styled from "styled-components";
import { Comment } from "../components/blog/comment";

export function Comments() {
  const name = "사용자1";
  const date = "2023.5.6";
  const text = "커뮤니티에서 다른 사람과 의견을 주고받는 것이 재밌어요.";
  return (
    <CommentBox>
      <Forleft>
        <Headofcomments>n개의 댓글</Headofcomments>
      </Forleft>

      <Comment username={name} date={date} text={text}></Comment>
      <MakingCommet></MakingCommet>
      <div>
        <Enroll>등록</Enroll>
      </div>
    </CommentBox>
  );
}

const CommentBox = styled.div`
  width: 1090px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 280px;
  margin-right: 280px;

  margin-bottom: 93px;
`;

const MakingCommet = styled.div`
  width: 1090px;
  height: 106px;
  border: 1px solid gray;
  display: flex;
  float: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #000000;
  margin-left: 285px;
  margin-right: 285px;
  word-break: break-all;
  //background-color: #000000;
`;
const Headofcomments = styled.div`
  width: 95px;
  height: 23px;
  line-height: 23px;

  float: left;
  display: flex;
  //flex-direction: column;
  justify-content: left;
  align-items: center;

  font-family: "NanumSquare";
  font-style: normal;
  font-size: 20px;
  color: #000000;
`;
const Enroll = styled.div`
  width: 124px;
  height: 56px;
  //float: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #ffffff;
  margin-left: 1241px;
  margin-right: 300px;
  margin-top: 18px;
  background-color: #5613e8;
`;

const Forleft = styled.div`
  width: 1088px;

  display: flex;
  //flex-direction: column;
  justify-content: left;
  align-items: center;

  font-family: "NanumSquare";
  font-style: normal;
  font-size: 20px;
  color: #000000;

  margin-top: 18px;
  word-break: break-all;
`;
