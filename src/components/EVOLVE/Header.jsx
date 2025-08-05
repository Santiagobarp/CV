import styles from './Header.module.css';

function Header({ theme, view, setView }) {
    return (
        <header className={`${styles.header} ${theme === 'dark' ? styles.headerDarkMode : styles.headerLightMode }`}>
            <div className={styles.logoContainer}>
                <p className={theme === 'dark' ? styles.evolveDarkMode : styles.evolveLightMode}>EVOLVE</p>
            </div>
            <div className={styles.navContainer}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={`${styles.navItem} ${theme === 'dark' ? styles.navItemDarkMode : styles.navItemLightMode}`}>
                            <a href="#" className={theme === 'dark' ? styles.itemDarkMode : styles.itemLightMode}>Inicio</a>
                        </li>
                        <li className={`${styles.navItem} ${theme === 'dark' ? styles.navItemDarkMode : styles.navItemLightMode}`}>
                            <a href="#" className={theme === 'dark' ? styles.itemDarkMode : styles.itemLightMode} onClick={() => setView('sum')}>Suma</a>
                        </li>
                        <li className={`${styles.navItem} ${theme === 'dark' ? styles.navItemDarkMode : styles.navItemLightMode}`}>
                            <a href="#" className={theme === 'dark' ? styles.itemDarkMode : styles.itemLightMode} onClick={() => setView('rest')}>Resta</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={`${styles.login} ${theme === 'dark' ? styles.logDarkMode : styles.logLightMode}`}>
                <a href="#">Log in</a>
            </div>
        </header>
    );
}

export default Header;
