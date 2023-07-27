import styled from "styled-components";
export function BlogPhotoBox({ photo }) {
  return (
    /*<TitleContainer>*/
    <Photobox>{photo}</Photobox>
    /*</TitleContainer>*/
  );
}

const TitleContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 280px;
  margin-right: 0px;
  padding-top: 170px;
  margin-bottom: 71px;
  border: 1px solid gray;
  img {
    margin-bottom: 64px;
  }
`;

const Photobox = styled.div`
  margin-left: 280px;
  margin-right: 0px;
  width: 1094px;
  height: 326px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;
