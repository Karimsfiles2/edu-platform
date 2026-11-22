import { useState } from 'react';
import { lecturers } from '../data/lecturers.js';
import { LecturerCard } from '../components/lecturers/LecturerCard.jsx';
import styles from './LecturersPage.module.css';

export function LecturersPage() {
  const [filter, setFilter] = useState('all');

  const filteredLecturers = lecturers.filter(l => {
    if (filter === 'all') return true;
    return l.gender === filter;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Наши лекторы</h1>
        
        <div className={styles.filters}>
          <button className={filter === 'all' ? styles.active : ''} onClick={() => setFilter('all')}>Все</button>
          <button className={filter === 'male' ? styles.active : ''} onClick={() => setFilter('male')}>Мужчины</button>
          <button className={filter === 'female' ? styles.active : ''} onClick={() => setFilter('female')}>Женщины</button>
        </div>
      </div>

      
      <div className={styles.list}>
        {filteredLecturers.map(l => (
          <LecturerCard key={l.id} lecturer={l} />
        ))}
      </div>
    </div>
  );
}