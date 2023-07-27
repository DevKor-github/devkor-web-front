import Image from "next/image";
import backarrow from "../../../public/assets/img/backarrow.webp";
import styled from "styled-components";
import Link from "next/link";

export function BlogUpperPart({ title, name, date, clicks, comments, likes }) {
  return (
    <TitleContainer>
      <Link href="http://www.naver.com">
        <Image src={backarrow} alt="backarrow" width={30} />
      </Link>
      <div>
        <BlogTitle>{title}</BlogTitle>
        <RevsieDelete>
          <Link href="http://www.naver.com">
            <span>수정</span>
          </Link>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <Link href="http://www.naver.com">
            <span>삭제</span>
          </Link>
        </RevsieDelete>
      </div>
      <div>
        <NameDate>
          {name} · {date}
        </NameDate>
        <RevsieDelete>
          조회수 {clicks}&nbsp; 댓글 {comments}&nbsp; ♡ {likes}
        </RevsieDelete>
      </div>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;

  width: 1094px;

  margin-left: 280px;
  margin-right: 0px;
  margin-top: 174px;

  margin-bottom: 93px;

  img {
    margin-bottom: 64px;
  }
`;

const BlogTitle = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 23px;
  /* identical to box height */
  float: left;
  color: #000000;

  /*text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.6);*/
`;
const RevsieDelete = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  float: right;
  margin-top: 17px;
`;
const NameDate = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: left;
  align-items: center;
  float: left;
`;
