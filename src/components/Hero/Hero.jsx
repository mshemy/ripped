import styles from './Hero.module.css';

export default function Hero({ onFindLecturer }) {
  return (
    <section className={styles.hero}>
      <div className={styles.imgBox}>
        <img 
          src="/teacher.png" 
          alt="Преподаватель" 
          className={styles.img}
          onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&h=350&fit=crop'} 
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.
        </h2>
        <button className={styles.btn} onClick={onFindLecturer}>
          НАЙТИ ЛЕКТОРА
        </button>
      </div>
    </section>
  );
}