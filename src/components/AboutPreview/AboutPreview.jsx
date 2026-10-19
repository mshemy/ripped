import styles from './AboutPreview.module.css';

function AboutPreview() {
  return (
    <section className={styles.about}>
      <p className={styles.text}>
        Наша учебная платформа соединяет компании, образовательные учреждения и НКО 
        с профессиональными лекторами, спикерами и тренерами. Мы упрощаем процесс 
        подбора, бронирования и организации лекций, помогая находить экспертов, 
        которые не просто делятся знаниями, но и вдохновляют аудиторию.
      </p>
    </section>
  );
}

export default AboutPreview;