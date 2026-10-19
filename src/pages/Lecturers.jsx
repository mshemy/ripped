import { useState } from 'react';
import { lecturers } from '../data/lecturers';
import LecturerCard from '../components/LecturerCard/LecturerCard';
import styles from './Lecturers.module.css';

function Lecturers({ onSelectLecturer }) {
  const [filter, setFilter] = useState('all');

  const getFilteredLecturers = () => {
    if (filter === 'men') return lecturers.men;
    if (filter === 'women') return lecturers.women;
    return [...lecturers.men, ...lecturers.women];
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Наши лекторы</h1>
      
      <div className={styles.filters}>
        <button 
          className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
          onClick={() => setFilter('all')}
        >
          Все ({lecturers.men.length + lecturers.women.length})
        </button>
        <button 
          className={`${styles.filterBtn} ${filter === 'men' ? styles.active : ''}`}
          onClick={() => setFilter('men')}
        >
          Мужчины ({lecturers.men.length})
        </button>
        <button 
          className={`${styles.filterBtn} ${filter === 'women' ? styles.active : ''}`}
          onClick={() => setFilter('women')}
        >
          Женщины ({lecturers.women.length})
        </button>
      </div>

      <div className={styles.list}>
        {getFilteredLecturers().map((lecturer) => (
          <LecturerCard 
            key={lecturer.id} 
            lecturer={lecturer} 
            onClick={onSelectLecturer}
          />
        ))}
      </div>
    </div>
  );
}

export default Lecturers;