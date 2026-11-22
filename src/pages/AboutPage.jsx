import styles from './AboutPage.module.css';

export function AboutPage() {
  return (
    <div className={styles.page}>
      
      
      <section className={styles.heroSection}>
        <h1 className={styles.pageTitle}>О нас</h1>
        <p className={styles.mainText}>
          Наша учебная платформа соединяет компании, образовательные учреждения и НКО с 
          профессиональными лекторами, спикерами и тренерами. Мы упрощаем процесс подбора, 
          бронирования и организации лекций, помогая находить экспертов, которые не просто 
          делятся знаниями, но и вдохновляют аудиторию.
        </p>
      </section>

      
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Кому мы помогаем</h2>
        <div className={styles.grid3}>
          <div className={styles.card}>
            
            <h3 className={styles.cardTitle}>Компаниям</h3>
            <p className={styles.cardText}>Организуем корпоративные тренинги, лекции по финансовой грамотности и IT-компетенциям для сотрудников.</p>
          </div>
          <div className={styles.card}>
            
            <h3 className={styles.cardTitle}>Вузам и НКО</h3>
            <p className={styles.cardText}>Поможем подобрать спикеров для студенческих конференций, открытых лекций и социальных проектов.</p>
          </div>
          <div className={styles.card}>
            
            <h3 className={styles.cardTitle}>Частным лицам</h3>
            <p className={styles.cardText}>Найдем репетитора для подготовки к ЕГЭ, олимпиадам или для освоения новой профессии.</p>
          </div>
        </div>
      </section>


      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Как строится работа</h2>
        <div className={styles.stepsRow}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h4>Оставляете заявку</h4>
            <p>Расскажите, какая тема и формат вам нужны.</p>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h4>Мы подбираем лектора</h4>
            <p>Предложим 2-3 эксперта из нашей базы под ваш запрос.</p>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h4>Проводим занятие</h4>
            <p>Онлайн или оффлайн, в удобное для вас время.</p>
          </div>
        </div>
      </section>

      
      <section className={styles.statsSection}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>10</span>
          <span className={styles.statLabel}>профессиональных лекторов</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>30</span>
          <span className={styles.statLabel}>учебных дисциплин</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>300+</span>
          <span className={styles.statLabel}>тем для изучения</span>
        </div>
      </section>

    </div>
  );
}