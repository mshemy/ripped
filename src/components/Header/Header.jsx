import styles from './Header.module.css';

export default function Header({ onNavigate }) {
  return (
    <nav className={styles.nav}>
      <button className={styles.btn} onClick={() => onNavigate('home')}>Главная</button>
      <button className={styles.btn} onClick={() => onNavigate('partners')}>Партнёры</button>
      <button className={styles.btn} onClick={() => onNavigate('about')}>О нас</button>
      <button className={styles.btn} onClick={() => onNavigate('lecturers')}>Лекторы</button>
      <a href="tel:+79176393882" className={styles.phone}>+7 (917) 639-38-82</a>
    </nav>
  );
}