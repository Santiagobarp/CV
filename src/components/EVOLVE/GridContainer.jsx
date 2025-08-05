import styles from './GridContainer.module.css';  
import GridItem from './GridItem';

function GridContainer({ theme, items, onAddClick }) {
    return (
        <div className={styles.gridContainer}>
            {items.map((item) => (
                <GridItem
                    key={item.id}
                    title={item.name}
                    desc={item.desc}
                    theme={theme} // se pasa también el tema al GridItem
                />
            ))}
            <div
                className={`${styles.gridItem} ${styles.addSection} ${theme === 'light' ? styles.gridItemLight : styles.gridItemDark}`}
                onClick={onAddClick}
            >
                +
            </div>
        </div>
    );
}

export default GridContainer;

