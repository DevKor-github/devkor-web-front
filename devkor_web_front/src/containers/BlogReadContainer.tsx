import Image from "next/image";
import backarrow from "../../public/assets/img/backarrow.webp";
import { BlogUpperPart } from "../components/blog/blog_upperpart";
import { BlogPhotoBox } from "../components/blog/photobox";

import { BlogText } from "../components/blog/blog_text";
import { Comments } from "@/containers/BlogComments";
import { Tags } from "@/containers/BlogTag";
import styled from "styled-components";

export function Blogtop() {
  const title = "제목제목제ㅔ목";
  const name = "ddd";
  const date = "2023.05.31";
  const clicks = 33;
  const comments = 3;
  const likes = 7;

  const text =
    "dfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahjahdkjhkajhjdfadfsfdfasdfadfadadfhahjahdkjhkajhjhhjhhjahsjhfjdhfhajhdjfhahjshdfadfsfdfasddfadfsfdfasdfadfadadfhahjahdkjhkajhjhhjhhjahsjhfjdhfhajhdjfhahjshdfadfsfdfasddfadfsfdfasdfadfadadfhahjahdkjhkajhjhhjhhjahsjhfjdhfhajhdjfhahjshdfadfsfdfasddfadfsfdfasdfadfadadfhahjahdkjhkajhjhhjhhjahsjhfjdhfhajhdjfhahjshdfadfsfdfasdfadfadadfhahjahdkjhkajhjhhjhhjahsjhfjdhfhajhdjfhahjshdfadfsfdfasdfadfadadfhahjahdkjhkajhjhhjhhjahsjhfjdhfhajhdjfhahjsh";

  return (
    <MainSectionWrapper>
      <Bdiv>
        <BlogUpperPart
          title={title}
          name={name}
          date={date}
          clicks={clicks}
          comments={comments}
          likes={likes}
        ></BlogUpperPart>

        <BlogPhotoBox></BlogPhotoBox>
        <BlogText>{text}</BlogText>

        <Comments></Comments>
      </Bdiv>
      <Tags></Tags>
    </MainSectionWrapper>
  );
}

const MainSectionWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  //justify-content: center;
`;
const Forboth = styled.div`
  float: left;
  display: flex;
`;
const Bdiv = styled.div`
  margin-right: -211px;
`;
