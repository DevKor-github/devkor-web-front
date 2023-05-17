import Link from "next/link";
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <div>
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
                </div>
                <div>
                    <Nav>
                        <ul>
                            <li>
                                <Link href="/github">GitHub</Link>
                            </li>
                            <li>
                                <Link href="/recruiting">리크루팅</Link>
                            </li>
                        </ul>
                    </Nav>
                </div>
            </HeaderContent>
        </HeaderContainer>
    );
};
export default Header;

const Nav = styled.nav`
    ul {
        display: flex;
        list-style: none;
        li + li {
            margin-left: 30px;
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
const HeaderContent = styled.div`
    display: flex;
    width: 96%;
    max-width: 1100px;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
`;
