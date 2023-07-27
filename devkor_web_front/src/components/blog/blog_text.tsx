import styled from "styled-components";

export function BlogText({ ...props }) {
  return (
    /*<TitleContainer>*/
    <Textbox>{props.children}</Textbox>
    /*</TitleContainer>*/
  );
}

const TitleContainer = styled.div`
  border: 1px solid gray;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: 280px;
  margin-right: 280px;

  margin-bottom: 93px;

  img {
    margin-bottom: 64px;
  }
`;

const Textbox = styled.div`
  width: 1081px;
  height: 511px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: "NanumSquare";
  font-style: normal;

  color: #000000;
  margin-left: 285px;
  margin-right: 285px;
  margin-bottom: 116px;
  word-break: break-all;
  //background-color: #000000;
`;
