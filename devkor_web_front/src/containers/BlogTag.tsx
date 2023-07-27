import styled from "styled-components";
import { Tagcomponent } from "../components/blog/tag";

export function Tags() {
  const taginfo1 = "태그입니다";
  const taginfo2 = "태그입니다2";
  return (
    <TagBox>
      <Forleft>
        <Headofcomments>태그</Headofcomments>
      </Forleft>

      <Tagcomponent taginfo={taginfo1}></Tagcomponent>
      <Tagcomponent taginfo={taginfo2}></Tagcomponent>
    </TagBox>
  );
}
const TagBox = styled.div`
  width: 125px;
  height: 359px;
  display: flex;
  float: right;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 320px;

  margin-bottom: 93px;
`;

const Headofcomments = styled.div`
  width: 40px;
  height: 23px;
  line-height: 23px;

  float: right;
  display: flex;
  //flex-direction: column;
  //justify-content: left;
  align-items: center;

  font-family: "NanumSquare";
  font-style: normal;
  font-size: 20px;
  color: #5613e8;
  margin-bottom: 25px;
  //border: 1px solid gray;
`;

const Forleft = styled.div`
  width: 125px;

  display: flex;
  //flex-direction: column;
  //justify-content: left;
  align-items: center;

  font-family: "NanumSquare";
  font-style: normal;
  font-size: 20px;
  color: #000000;

  margin-top: 18px;
  word-break: break-all;
`;
