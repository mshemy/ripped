import styles from './Partners.module.css';

function Partners() {
  const partners = [
    {
      name: 'ICL',
      logo: '/partners/icl-logo.png',
      link: 'https://www.icl-ru.com/',
      description: 'ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая в число крупнейших ИТ-компаний России, предоставляющая весь спектр ИТ-услуг, проектов, решений и продуктов. Компания была основана в 1991 году на базе завода ЭВМ Казанским производственным объединением вычислительных систем (КПО ВС).'
    },
    {
      name: 'Tatneft',
      logo: '/partners/tatneft-logo.png',
      link: 'https://www.tatneft.ru/',
      description: '«Татнефть» — одна из крупнейших российских вертикально-интегрированных компаний, в составе которой динамично развиваются нефтегазодобыча, нефтепереработка, нефтегазохимия, сеть АЗС, композитный кластер, электроэнергетика, разработки и производство оборудования для нефтегазовой отрасли и блок сервисных структур.'
    }
  ];

  return (
    <section className={styles.partners}>
      <div className={styles.grid}>
        {partners.map((partner) => (
          <div key={partner.name} className={styles.card}>
            <div className={styles.logoRow}>
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className={styles.logo}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150x60/ffffff/333333?text=' + partner.name;
                }}
              />
              <a 
                href={partner.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.arrow}
                title={`Перейти на сайт ${partner.name}`}
              >
                ↗
              </a>
            </div>
            <p className={styles.description}>{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;