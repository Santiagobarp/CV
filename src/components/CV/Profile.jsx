// src/pages/CV/Profile.jsx 
import React from 'react';
import styles from './Profile.module.css';

const icons = import.meta.glob('/src/assets/Icons TS/*.png', { eager: true });

const iconMap = {};
for (const path in icons) {
    const key = path.split('/').pop().replace('.png', '').toUpperCase();
    iconMap[key] = icons[path].default;
}

const softIcons = import.meta.glob('/src/assets/Icons SS/*.png', { eager: true });

const softIconMap = {};
for (const path in softIcons) {
    const key = path.split('/').pop().replace('.png', '');
    softIconMap[key] = softIcons[path].default;
}

const staticImages = import.meta.glob('/src/assets/*.{png,jpg}', { eager: true });


const imageMap = {};
for (const path in staticImages) {
  const key = path.split('/').pop(); // 'SBP.jpg', etc.
    imageMap[key] = staticImages[path].default;
}

function Profile() {
    return (
        <section id="inicio" className={`${styles.profile} ${styles.sectionOffset}`}>
            <div className={styles.profileWrapper}>
                
                {/*-- IMG --*/}
                <div className={styles.profileImgContainer}>
                    <img src={imageMap['SBP.jpg']} className={styles.profileImg} alt="Profile" />
                </div>


                {/*-- CONTENEDOR DE INFO --*/}
                <div className={styles.profileDataContainer}>
                    <div className={styles.profileData}>

                        {/*-- SBP --*/}
                        <div className={styles.profileDescription}>
                            <h1 className={styles.presentationName}>Santiago Barragán Pinzón</h1>
                            <p className={styles.profileDescription}>
                            <span className={styles.span}>Software engineering student</span> with a background in production and e-commerce operations. Skilled in leading teams, improving workflows, and building solutions through technology. Passionate about problem-solving and continuous learning.
                            </p>
                        </div>

                        {/*-- Technical Skills --*/}
                        <div className={styles.profileSkillsContainer}>
                            <h2>Technical Skills</h2>
                        <div className={styles.skillsWrapper}>
                            {["INGLES", "HTML", "CSS", "JS", "GIT", "GITHUB", "PYTHON", "REACT"].map(skill => (
                            <div className={styles.skillPill} key={skill}>
                                <img src={iconMap[skill.toUpperCase()]} alt={`${skill} icon`} className={styles.skillIcon} />
                            {skill === 'INGLES' ? 'English – Intermediate (B1)' : skill}
                            </div>
                            ))}
                        </div>
                        </div>

                        {/*-- Soft Skills --*/}
                        <div className={styles.profileSkillsContainer}>
                            <h2>Soft Skills</h2>
                            <div className={styles.skillsWrapper}>
                            {["Lider", "SOLVING", "Adaptability", "Collaboration", "Communication", "CriticalT"].map(skill => (
                            <div className={styles.skillPill} key={skill}>
                                <img src={softIconMap[skill]} alt={`${skill} icon`} className={styles.skillIcon} />
                                {skill}
                            </div>
                            ))}
                            </div>
                        </div>
            </div>
            </div>
        </div>
        </section>
    );
}

export default Profile;