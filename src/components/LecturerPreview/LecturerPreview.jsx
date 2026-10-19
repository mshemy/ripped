import styles from './LecturerPreview.module.css';

function LecturerPreview() {
  return (
    <section className={styles.preview}>
      <div className={styles.card}>
        <div className={styles.photoPlaceholder}>
          место для фото<br/>преподавателя
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>ФИО преподавателя.</h3>
          <p className={styles.description}>
            Подумайте чем ещё можно восполнить этот блок
          </p>
        </div>
      </div>
      <div className={styles.customBlock}>
        <p className={styles.customText}>Блок для заполнения по своему усмотрению</p>
      </div>
    </section>
  );
}

export default LecturerPreview;