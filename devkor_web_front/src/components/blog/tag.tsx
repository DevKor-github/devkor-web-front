import styled from "styled-components";
export function Tagcomponent({ taginfo }) {
  return <Tag>{taginfo}</Tag>;
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  margin-left: 280px;
  margin-right: 280px;
  padding-top: 170px;
  margin-bottom: 71px;

  //border: 1px solid gray;
`;

const Tag = styled.div`
  width: 125px;
  height: 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid gray;
  font-family: "NanumSquare";
  font-style: normal;
  font-size: 20px;
`;
