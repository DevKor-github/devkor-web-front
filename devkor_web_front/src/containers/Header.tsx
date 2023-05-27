import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Nav>
          <ul>
            <li>
              <Link href="/service">서비스</Link>
            </li>
            <li>
              <Link href="/blog">블로그</Link>
            </li>
            <li>
              <Link href="/archive">아카이브</Link>
            </li>
          </ul>
        </Nav>
        <Nav>
          <ul>
            <li>
              <Link href="/github">GitHub</Link>
            </li>
            <li>
              <Link href="/recruiting">리크루팅</Link>
            </li>
            <li>
              <Link href="/recruiting">로그인</Link>
            </li>
          </ul>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};
export default Header;

const Nav = styled.div`
  ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 30px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      font-family: "NanumSquare";
      font-style: normal;
      font-size: 16px;
    }
  }
`;
const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #ffff;
`;
const HeaderContent = styled.nav`
  display: flex;
  width: 100%;
  padding-left: 10%;
  padding-right: 5%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.2);
`;
