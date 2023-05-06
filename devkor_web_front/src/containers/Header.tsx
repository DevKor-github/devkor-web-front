import styled from "styled-components";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <div>
                    <Nav>
                        <ul>
                            <li>
                                <a href="/service">서비스</a>
                            </li>
                            <li>
                                <a href="/blog">블로그</a>
                            </li>
                            <li>
                                <a href="/archive">아카이브</a>
                            </li>
                        </ul>
                    </Nav>
                </div>
                <div>
                    <Nav>
                        <ul>
                            <li>
                                <a href="/github">GitHub</a>
                            </li>
                            <li>
                                <a href="/recruiting">리크루팅</a>
                            </li>
                        </ul>
                    </Nav>
                    {/*<h2>This is Header</h2>*/}
                </div>
            </HeaderContent>

            {/*<div>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            <a href="/service">서비스</a>
                        </li>
                        <li>
                            <a href="/blog">블로그</a>
                        </li>
                        <li>
                            <a href="/archive">아카이브</a>
                        </li>
                        <li>
                            <a href="/github">GitHub</a>
                        </li>
                        <li>
                            <a href="/recruiting">리크루팅</a>
                        </li>
                    </ul>
                </nav>*/}
            {/*<h2>This is Header</h2>*/}
            {/* </div>*/}
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
