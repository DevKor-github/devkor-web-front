import styles from './Header.module.scss'
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contents}>
            <div>
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
                    </ul>
                </nav>
            </div>
            <div>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            <a href="/github">GitHub</a>
                        </li>
                        <li>
                            <a href="/recruiting">리크루팅</a>
                        </li>
                    </ul>
                </nav>
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
    )
}
export default Header