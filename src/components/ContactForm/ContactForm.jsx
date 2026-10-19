import styles from './ContactForm.module.css';

export default function ContactForm({ onOpenForm }) {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Остались вопросы?</h2>
          <p className={styles.subtitle}>
            Оставьте заявку — мы перезвоним вам в течение дня, ответим на все вопросы и поможем выбрать подходящего лектора.
          </p>
          <div className={styles.contacts}>
            <div className={styles.contactItem}>
              <span className={styles.icon}></span>
              <a href="tel:+79176393882" className={styles.contactLink}>+7 (917) 639-38-82</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}></span>
              <span className={styles.contactText}>info@uchebnaya-platforma.ru</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}></span>
              <span className={styles.contactText}>Пн-Пт: 9:00 — 21:00</span>
            </div>
          </div>
        </div>
        <div className={styles.formBlock}>
          <h3 className={styles.formTitle}>Быстрая заявка</h3>
          <p className={styles.formText}>Заполните форму — мы свяжемся с вами</p>
          <button className={styles.btn} onClick={onOpenForm}>
            Оставить заявку
          </button>
        </div>
      </div>
    </section>
  );
}