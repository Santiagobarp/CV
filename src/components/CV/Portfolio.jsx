// src/pages/CV/Portfolio.jsx
import React from 'react';
import styles from './Portfolio.module.css';

function Portfolio() { 
    return (
        <section id="proyectos" className={styles.portfolio}>
            <h2 className={styles.portfolioTitle}>Portfolio</h2>
            <div className={styles.portfolioProjectContainer}>
                <div className={styles.portfolioProjectCard}>
                    <img src="/CV/assets/EVOLVE.png" alt="EVOLVE" className={styles.portfolioCardImg} />
                    <div className={styles.portfolioCardContent}>
                        <h3 className={styles.portfolioCardTitle}>
                        <a href="/evolve">EVOLVE</a>
                        </h3>
                        <p className={styles.portfolioCardDescription}>
                        Habit tracker for personal growth
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
