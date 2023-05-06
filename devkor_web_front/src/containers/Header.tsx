import styled from "styled-components";
import styles from "./Header.module.css";
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contents}>
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
            </div>

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
        </header>
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
