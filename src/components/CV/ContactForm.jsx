// src/pages/CV/ContactForm.jsx
import React from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
    return (
        <>
        <h2 id="contacto" className={`${styles.formTitle} ${styles.sectionOffset}`}>Let's work together.</h2>
        <section className={styles.form}>
            <form>
                <h3 className={styles.formSection}>Contact Information.</h3>
                <div className={styles.formInput}>
                    <input type="text" placeholder="Full name" id="nombre" />
                </div>
            <div className={styles.formInput}>
                <input type="email" placeholder="Email address" id="email" />
            </div>
            <div className={styles.formInput}>
                <input type="number" placeholder="Phone number" id="phone" />
            </div>
            <div className={styles.formInput}>
                <select className={styles.select} name="reference">
                <option disabled selected>How did you hear about me?</option>
                <option value="Web">Website</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend or Family">Friend or Family</option>
                </select>
            </div>

            <h3 className={`${styles.formSection} ${styles.titleTextarea}`}>Tell me about your project.</h3>
            <div className={styles.formInput}>
                <textarea
                className={styles.textarea}
                rows="10"
                placeholder="Feel free to share your ideas, questions, or the scope of your project."
                id="message"
                ></textarea>
            </div>
            </form>
        </section>
        </>
    );
}

export default ContactForm;
