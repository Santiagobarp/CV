import { useState } from 'react';  
import styles from './GridItem.module.css';

function GridItem({ title, theme }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(prev => !prev);
        if (!expanded) {
            setTimeout(() => {
                document.getElementById(`item-${title}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 1000);
        }
    };

    return (
        <div
            id={`item-${title}`}
            className={`
                ${styles.gridItem}
                ${expanded ? styles.expanded : ''}
                ${theme === 'light' ? styles.gridItemLight : styles.gridItemDark}
            `}
        >
            <button className={styles.collapseBtn} onClick={toggleExpand}>
                {expanded ? '˄' : '˅'}
            </button>
            <h3 className={styles.gridTitle}>{title}</h3>
            <div className={styles.innerGrid}></div>
        </div>
    );
}

export default GridItem;


