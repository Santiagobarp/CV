// src/pages/CV/ContactForm.jsx
import React from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
    return (
        <>
            <h2 id="contacto" className={`${styles.formTitle} ${styles.sectionOffset}`}>
                Let's work together.
            </h2>
            <section className={styles.form}>
                <form>
                    <h3 className={styles.formSection}>Contact Information.</h3>

                    <div className={styles.formInput}>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Full name"
                            autoComplete="name"
                        />
                    </div>

                    <div className={styles.formInput}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            autoComplete="email"
                        />
                    </div>

                    <div className={styles.formInput}>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone number"
                            autoComplete="tel"
                        />
                    </div>

                    <div className={styles.formInput}>
                        <select
                            className={styles.select}
                            name="reference"
                            id="reference"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                How did you hear about me?
                            </option>
                            <option value="Web">Website</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Friend or Family">Friend or Family</option>
                        </select>
                    </div>

                    <h3 className={`${styles.formSection} ${styles.titleTextarea}`}>
                        Tell me about your project.
                    </h3>

                    <div className={styles.formInput}>
                        <textarea
                            id="message"
                            name="message"
                            className={styles.textarea}
                            rows="10"
                            placeholder="Feel free to share your ideas, questions, or the scope of your project."
                            autoComplete="off"
                        ></textarea>
                    </div>
                </form>
            </section>
        </>
    );
}

export default ContactForm;
