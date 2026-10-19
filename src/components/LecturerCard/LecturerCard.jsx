import styles from './LecturerCard.module.css';

function LecturerCard({ lecturer, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(lecturer)}>
      <div className={styles.photoBox}>
        <img 
          src={lecturer.photo} 
          alt={lecturer.name}
          className={styles.photo}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/200x200/cccccc/666666?text=Фото';
          }}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{lecturer.name}</h3>
        <p className={styles.education}>{lecturer.education}</p>
        <p className={styles.experience}>Стаж: {lecturer.experience}</p>
        <p className={styles.degree}>Степень: {lecturer.degree}</p>
        <button className={styles.moreBtn}>Подробнее →</button>
      </div>
    </div>
  );
}

export default LecturerCard;