import { motion, AnimatePresence } from 'framer-motion';
import styles from './SubtitleSection.module.css';

function SubtitleSection({ theme, view }) {
    const isSum = view === 'sum';

    const title = isSum
        ? 'hábitos que te construyen'
        : 'hábitos que te deconstruyen';

    const action = isSum ? 'Suma' : 'Resta';
    const description = isSum
        ? 'Agrega y edita tus hábitos.'
        : 'Agrega y edita tus hábitos.';

    const spanStyle = {
        color: isSum ? '#3f8250' : '#a43f3f',
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={view}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={styles.container}
            >
                <h1 className={styles.subtitle}>
                    <span style={spanStyle}>{action}</span> {title}
                </h1>
                <p className={styles.descriptionSection}>{description}</p>
            </motion.div>
        </AnimatePresence>
    );
}

export default SubtitleSection;
