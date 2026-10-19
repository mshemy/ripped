import styles from './WhyUs.module.css';

function WhyUs() {
  const reasons = [
    {
      title: 'Экспертность',
      text: 'Наши лекторы — кандидаты и доктора наук, преподаватели МФТИ, МГУ, ВШЭ и МГИМО с реальным опытом работы в индустрии.'
    },
    {
      title: 'Гибкий формат',
      text: 'Онлайн и офлайн занятия, индивидуальные уроки, пакеты занятий и интенсивы. Подстроимся под ваш график и задачи.'
    },
    {
      title: 'Индивидуальный подход',
      text: 'Составляем программу под конкретные цели: подготовка к ЕГЭ, олимпиадам, корпоративные тренинги или личные проекты.'
    },
    {

      title: 'Проверенное качество',
      text: 'Нам доверяют крупнейшие компании России — ICL и «Татнефть». Более 500 студентов уже прошли наши курсы.'
    }
  ];

  const stats = [
    { number: '10+', label: 'лекторов-экспертов' },
    { number: '30+', label: 'дисциплин и курсов' },
    { number: '500+', label: 'обученных студентов' },
    { number: '98%', label: 'довольных клиентов' }
  ];

  return (
    <section className={styles.whyUs}>
      <h2 className={styles.title}>Почему выбирают нас</h2>
      <p className={styles.subtitle}>
        Мы соединяем лучших преподавателей с теми, кто хочет учиться у профессионалов
      </p>

      <div className={styles.reasonsGrid}>
        {reasons.map((reason) => (
          <div key={reason.title} className={styles.reasonCard}>
            <div className={styles.icon}>{reason.icon}</div>
            <h3 className={styles.reasonTitle}>{reason.title}</h3>
            <p className={styles.reasonText}>{reason.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.statsBlock}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <div className={styles.statNumber}>{stat.number}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;