import Image from "next/image";
import styled from "styled-components";
import github_mark_white1 from "../../public/assets/img/github_mark_white1.webp";
import Vector from "../../public/assets/img/Vector.webp";

interface serviceContainerProps {
  img: img;
  serviceName: any;
  content: any;
  serviceURL: any;
  githubURL: any;
}

export default function ServiceContainer({
  img,
  serviceName,
  content,
  serviceURL,
  githubURL,
}: serviceContainerProps) {
  return (
    <Box>
      <LogoBox>
        <Image src={img} alt={serviceName} width={175} />
      </LogoBox>
      <MainContent size="big">{content}</MainContent>

      <Picture>
        <LinkBox>
          <a href={serviceURL}>
            <Image src={Vector} alt="arrow" width={44} />
          </a>
        </LinkBox>
        <LinkBox2>
          <a href={githubURL}>
            <Image src={github_mark_white1} alt="github" width={46} />
          </a>
        </LinkBox2>
      </Picture>
    </Box>
  );
}

const MainContent = styled.div<{ size?: string }>`
  width: ${(props) => (props.size === "big" ? "792px" : "338px")};
  height: ${(props) => (props.size === "big" ? "336px" : "336px")};
  font-size: 27px;
  text-align: center;
  font-weight: 300;
  margin-right: 0px;
  margin-top: 0px;
  background-color: rgba(255, 255, 255, 1);
  line-height: 336px;
  font-family: "NanumSquare";
  color: black;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Picture = styled.div`
  width: 122px;
  height: 336px;
  font-size: 18px;
  text-align: center;
  font-weight: 300;
  margin-top: 0px;
  float: left;
  background-color: rgba(255, 255, 255, 1);
`;
const Box = styled.div`

  background-color: rgba(255, 255, 255, 1);
  
  width;1252px;
  height: 336px;
  margin-bottom: 64px;
  margin-left: 334px;
  display:table;
`;
const LinkBox = styled.div`

  background-color: rgba(86, 19, 232, 1);
 
  width;122px;
  height: 168px;
  margin-bottom: 0px;
  display: flex;
        justify-content: center;
        align-items: center;
  
`;
const LinkBox2 = styled.div`

  background-color: rgba(67, 59, 83, 1);
  
  width;122px;
  height: 168px;
  margin-bottom: 0px;
  display: flex;
        justify-content: center;
        align-items: center;
`;
const LogoBox = styled.div`

  background-color: rgba(255, 255, 255, 1);
  
  width;284px;
  height: 284px;
  float: left;
  margin-left: 26px
 
  display:inline-block;
  justify-content: center;
  align-items: center;

  
  box-shadow: -1px -1px 5px rgba(128, 128, 128, 1.0); 
  object-fit: none;
`;
