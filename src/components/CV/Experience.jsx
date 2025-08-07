// src/pages/CV/Experience.jsx
import React from 'react'; 
import styles from './Experience.module.css';

const icons = import.meta.glob('@/assets/Icons TS/*.png', { eager: true });

const iconMap = {};
for (const path in icons) {
  const key = path.split('/').pop(); // 'EDUCATION.png', 'WORK.png', etc.
    iconMap[key] = icons[path].default;
}

function Experience() {
    return (
        <div className={styles.profileEduExpContainer}>
            
            {/*-- Education --*/}
            <div className={styles.profileColumn}>
                <h2>
                    <img src={iconMap['EDUCATION.png']} alt="Education icon" className={styles.skillIcon} />
                Education
                </h2>
                <p className={styles.eduItem}>Instituto Tecnológico de Estudios Superiores de Occidente</p>
                <p className={styles.eduItem}>B.S Software Engineering</p>
                <p className={styles.eduItem}>December 2026 (Expected)</p>
                <p className={styles.eduItem}>Current Grade: 87/100</p>
                <p className={styles.eduItem}>Scholarship: Beca ITESO</p>
            </div>


        <div className={styles.profileDivider}></div>

            {/*-- Experience --*/}
            <div className={styles.profileColumn}>
                <h2>
                    <img src={iconMap['WORK.png']} alt="Work icon" className={styles.skillIcon} />
                Experience
                </h2>
                <div className={styles.experienceItem}>
                <p className={styles.eduItem}><strong>Geovanny Apparel S.A de C.V.</strong></p>
                <p className={styles.eduItem}>Production Supervisor <span className={styles.experienceDate}>Apr. 2024 – Apr. 2025</span></p>
                <ul className={styles.experienceList}>
                    <li>Led a team of 22 employees, improving productivity and efficiency through tech-driven strategies.</li>
                    <li>Implemented performance-based systems, boosting output by 60% in 6 months.</li>
                    <li>Streamlined production workflows to ensure quality and on-time delivery.</li>
                </ul>
                </div>
                <div className={styles.experienceItem}>
                <p className={styles.eduItem}><strong>Geovanny Apparel S.A de C.V.</strong></p>
                <p className={styles.eduItem}>Sales Assistant <span className={styles.experienceDate}>Aug. 2021 – May 2023</span></p>
                <ul className={styles.experienceList}>
                    <li>Managed e-commerce operations and product listings on Shopify.</li>
                    <li>Improved site UX using Shogun and enhanced product presentation.</li>
                    <li>Supported digital marketing with Zoho tools (CRM, BOOKS, PROJECTS).</li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;
