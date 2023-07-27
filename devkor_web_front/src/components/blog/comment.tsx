import styled from "styled-components";

export function Comment({ username, date, text }) {
  return (
    <CommentBox>
      <Datadiv>
        <hr width="100%" />
      </Datadiv>
      <Datadiv>
        {username}&nbsp;&nbsp; <Grayletter>{date}</Grayletter>
      </Datadiv>
      <Textbox>{text}</Textbox>
    </CommentBox>
  );
}

const CommentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  margin-left: 280px;
  margin-right: 280px;

  margin-bottom: 93px;
  font-family: "NanumSquare";
  font-style: normal;
  font-size: 20px;
`;

const Textbox = styled.div`
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
const Datadiv = styled.div`
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
const Grayletter = styled.span`
  font-family: "NanumSquare";
  font-style: normal;
  font-size: 20px;
  color: #000000;
  opacity: 0.3;
`;
