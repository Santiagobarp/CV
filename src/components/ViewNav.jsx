import styles from './ViewNav.module.css';  

function ViewNav({ setTheme, theme }) {

    return (
        <div className={styles.view}>
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li onClick={() => setTheme('light')} className={`${styles.navItem1}  ${theme === 'dark' ? styles.itemDarkMode : styles.itemLightMode}`}>
                    <a
                        href="#"
                        className={`${styles.navItemBase} ${styles.navItemSum} ${theme === 'dark' ? styles.darkModeLight : styles.lightMode}`}
                        >
                        <span className="material-symbols-outlined" style={{ color: '#FACC15' }}>
                            light_mode
                        </span>
                        Light
                    </a>
                </li>
            <li onClick={() => setTheme('dark')} className={styles.navItem2}>
                <a
                    href="#"
                    className={`${styles.navItemBase} ${styles.navItemRest} ${theme === 'dark' ? styles.darkModeDark : styles.lightMode}`}
                    >

                    <span className="material-symbols-outlined" style={{ color: '#3B4D63' }}>
                        dark_mode
                    </span>
                Dark
                </a>
            </li>
            </ul>
        </nav>
        </div>
    );
}

export default ViewNav;