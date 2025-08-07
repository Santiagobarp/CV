// src/pages/CV/Portfolio.jsx
import React from 'react';
import styles from './Portfolio.module.css';
import { Link } from 'react-router-dom'; 

const staticImages = import.meta.glob('@/assets/*.{png,jpg}', { eager: true });

const imageMap = {};
for (const path in staticImages) {
  const key = path.split('/').pop(); // 'EVOLVE.png', etc.
    imageMap[key] = staticImages[path].default;
}

function Portfolio() { 
    return (
        <section id="proyectos" className={styles.portfolio}>
            <h2 className={styles.portfolioTitle}>Portfolio</h2>
            <div className={styles.portfolioProjectContainer}>
                <div className={styles.portfolioProjectCard}>
                    <img src={imageMap['EVOLVE.png']} alt="EVOLVE" className={styles.portfolioCardImg} />
                    <div className={styles.portfolioCardContent}>
                        <h3 className={styles.portfolioCardTitle}>
                            <Link to="/evolve">EVOLVE</Link>
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

