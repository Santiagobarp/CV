// src/components/CV/Header.jsx
import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.headerNav}>
                <ul className={styles.headerNavList}>
                    <li className={styles.headerNavItem}><a href="#inicio">About me</a></li>
                    <li className={styles.headerNavItem}><a href="#proyectos">Portfolio</a></li>
                    <li className={styles.headerNavItem}><a href="#contacto">Contact me</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;


