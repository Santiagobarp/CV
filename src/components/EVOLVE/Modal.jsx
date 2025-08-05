import { useState } from 'react'; 
import styles from './Modal.module.css';

function Modal({ onConfirm, onClose }) {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = () => {
        if (!name.trim()) return;
        onConfirm(name.trim(), desc.trim());
        setName('');
        setDesc('');
    };

    return (
        <div className={styles.modalOverlay}>
        <div className={styles.modal}>
            <button className={styles.modal__close} onClick={onClose}>×</button>
            <h2 className={styles.modal__title}>Nuevo hábito</h2>
            <p className={styles.modal__subtitle}>Escribe el nombre de tu nuevo hábito</p>

            <label className={styles.modal__label} htmlFor="habit-name">Nombre del hábito</label>
            <input
            id="habit-name"
            className={styles.modal__input}
            type="text"
            placeholder="Correr 5 km"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <label className={styles.modal__label} htmlFor="habit-desc">
            Descripción <span className={styles.modal__optional}>(opcional)</span>
            </label>
            <input
            id="habit-desc"
            className={styles.modal__input}
            type="text"
            placeholder="..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            />

            <button className={styles.modal__submit} onClick={handleSubmit}>Continuar</button>
        </div>
        </div>
    );
}

export default Modal;

