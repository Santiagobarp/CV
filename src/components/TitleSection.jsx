import styles from './TitleSection.module.css';

function TitleSection () {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Evoluciona hacia tus objetivos</h1>
            <p className={styles.descriptionSection}>Diseña un entorno que impulse tu transformación personal. </p>
        </div>
    );
}

export default TitleSection;