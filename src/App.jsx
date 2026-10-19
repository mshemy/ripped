import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutPreview from './components/AboutPreview/AboutPreview';
import Partners from './components/Partners/Partners';
import WhyUs from './components/WhyUs/WhyUs';
import ContactForm from './components/ContactForm/ContactForm';
import Lecturers from './pages/Lecturers';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedLecturer, setSelectedLecturer] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [reqTariff, setReqTariff] = useState('');
  const [reqName, setReqName] = useState('');
  const [reqPhone, setReqPhone] = useState('');
  const [reqEmail, setReqEmail] = useState('');
  const [reqComment, setReqComment] = useState('');
  const [reqTime, setReqTime] = useState('day');
  const [reqSent, setReqSent] = useState(false);
  const [reqNumber, setReqNumber] = useState('');

  const scrollTo = (id) => {
    if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    else { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); }
  };

  const handleNav = (section) => {
    if (section === 'lecturers') {
      setSelectedLecturer(null);
      setCurrentPage('lecturers');
      window.scrollTo({ top: 0 });
      return;
    }
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => scrollTo(section), 100);
    } else scrollTo(section);
  };

  const handleSelect = (l) => { setSelectedLecturer(l); window.scrollTo({ top: 0 }); };
  const handleBack = () => { setSelectedLecturer(null); window.scrollTo({ top: 0 }); };

  const openForm = (t = '') => {
    setReqTariff(t); setReqName(''); setReqPhone(''); setReqEmail('');
    setReqComment(''); setReqTime('day'); setReqSent(false); setShowForm(true);
  };
  const closeForm = () => setShowForm(false);

  const submitForm = (e) => {
    e.preventDefault();
    const num = '№' + Math.floor(100000 + Math.random() * 900000);
    setReqNumber(num);
    setReqSent(true);
    console.log('Заявка:', { num, name: reqName, phone: reqPhone, email: reqEmail, tariff: reqTariff, time: reqTime, comment: reqComment });
  };

  const pageStyle = { fontFamily: "'Segoe UI', sans-serif", background: '#f5f5f5', minHeight: '100vh' };
  const footer = (
    <footer style={{ textAlign: 'center', padding: '20px', color: '#777', background: '#fff', borderTop: '1px solid #e0e0e0', marginTop: '40px' }}>
      © {new Date().getFullYear()} Учебная платформа. Все права защищены. | 📞 +7 (917) 639-38-82
    </footer>
  );

  const inputStyle = {
    width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '6px',
    fontSize: '1rem', marginTop: '6px', outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.2s'
  };

  const labelStyle = { display: 'block', marginBottom: '15px', fontWeight: '600', color: '#333' };

  const modal = showForm && (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
      <div style={{ background: 'white', padding: '35px', borderRadius: '12px', width: '500px', maxWidth: '100%', maxHeight: '90vh', overflowY: 'auto' }}>
        {reqSent ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '15px' }}>✅</div>
            <h3 style={{ color: '#1e3c72', marginBottom: '10px', fontSize: '1.5rem' }}>Заявка принята!</h3>
            <p style={{ color: '#555', marginBottom: '10px', fontSize: '1.1rem' }}>
              Номер вашей заявки: <strong style={{ color: '#0066FF' }}>{reqNumber}</strong>
            </p>
            <p style={{ color: '#555', marginBottom: '20px', lineHeight: '1.6' }}>
              Спасибо, <strong>{reqName}</strong>!<br/>
              Мы свяжемся с вами по номеру <strong>{reqPhone}</strong>
              {reqEmail && <> и email <strong>{reqEmail}</strong></>}
              {' '}в ближайшее время.
            </p>
            {reqTariff && (
              <p style={{ background: '#f0f7ff', padding: '12px', borderRadius: '6px', color: '#2a5298', marginBottom: '20px' }}>
                📚 Тариф: <strong>{reqTariff}</strong>
              </p>
            )}
            <button onClick={closeForm} style={{ padding: '14px 32px', background: '#0066FF', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
              Отлично!
            </button>
          </div>
        ) : (
          <form onSubmit={submitForm}>
            <h3 style={{ color: '#1e3c72', marginBottom: '8px', fontSize: '1.5rem' }}> Оставить заявку</h3>
            <p style={{ color: '#777', marginBottom: '20px', fontSize: '0.9rem' }}>
              Заполните форму — мы перезвоним вам в течение дня
            </p>

            {reqTariff && (
              <div style={{ background: '#f0f7ff', padding: '12px', borderRadius: '6px', marginBottom: '20px', color: '#2a5298', fontWeight: '600' }}>
                Тариф: {reqTariff}
                {selectedLecturer && <><br/>Лектор: {selectedLecturer.name}</>}
              </div>
            )}

            <label style={labelStyle}>
              Ваше имя *
              <input type="text" required value={reqName} onChange={(e) => setReqName(e.target.value)}
                placeholder="Иван Иванов" style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Телефон *
              <input type="tel" required value={reqPhone} onChange={(e) => setReqPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__" style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Email
              <input type="email" value={reqEmail} onChange={(e) => setReqEmail(e.target.value)}
                placeholder="example@mail.ru" style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Когда вам удобно, чтобы мы перезвонили?
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                {[
                  { v: 'morning', l: 'Утро (9-12)' },
                  { v: 'day', l: 'День (12-18)' },
                  { v: 'evening', l: ' Вечер (18-21)' }
                ].map(opt => (
                  <button key={opt.v} type="button"
                    onClick={() => setReqTime(opt.v)}
                    style={{
                      flex: 1, padding: '10px', border: '2px solid ' + (reqTime === opt.v ? '#0066FF' : '#e0e0e0'),
                      background: reqTime === opt.v ? '#f0f7ff' : 'white', color: reqTime === opt.v ? '#0066FF' : '#333',
                      borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '0.85rem'
                    }}>
                    {opt.l}
                  </button>
                ))}
              </div>
            </label>

            <label style={labelStyle}>
              Комментарий (необязательно)
              <textarea value={reqComment} onChange={(e) => setReqComment(e.target.value)}
                placeholder="Ваши вопросы или пожелания..." rows="3"
                style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
            </label>

            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button type="submit" style={{ flex: 1, padding: '14px', background: '#0066FF', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
                Отправить заявку
              </button>
              <button type="button" onClick={closeForm} style={{ padding: '14px 20px', background: '#e0e0e0', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
                Отмена
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  // ПРОФИЛЬ ЛЕКТОРА
  if (currentPage === 'lecturers' && selectedLecturer) {
    return (
      <div style={pageStyle}>
        <Header onNavigate={handleNav} />
        <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
          <button onClick={handleBack} style={{ padding: '10px 20px', background: '#2a5298', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' }}>← Назад</button>
          <div style={{ background: 'white', padding: '30px', borderRadius: '8px' }}>
            <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
              <img src={selectedLecturer.photo} alt={selectedLecturer.name}
                style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                onError={(e) => e.target.src = 'https://via.placeholder.com/200x200/cccccc/666666?text=Фото'} />
              <div>
                <h1 style={{ color: '#1e3c72', marginBottom: '15px', lineHeight: '1.4' }}>{selectedLecturer.name}</h1>
                <p><strong>Образование:</strong> {selectedLecturer.education}</p>
                <p><strong>Стаж:</strong> {selectedLecturer.experience}</p>
                <p><strong>Степень:</strong> {selectedLecturer.degree}</p>
              </div>
            </div>
            <h2 style={{ color: '#1e3c72', marginBottom: '20px' }}>Дисциплины:</h2>
            {selectedLecturer.disciplines.map((d, i) => (
              <div key={i} style={{ marginBottom: '20px', padding: '20px', background: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #2a5298' }}>
                <h3 style={{ color: '#2a5298', marginBottom: '10px' }}>{d.title}</h3>
                <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>{d.description}</p>
                <details>
                  <summary style={{ cursor: 'pointer', color: '#2a5298', fontWeight: 'bold' }}>Темы ({d.topics.length})</summary>
                  <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>{d.topics.map((t, j) => <li key={j} style={{ marginBottom: '8px' }}>{t}</li>)}</ul>
                </details>
              </div>
            ))}
            <h2 style={{ color: '#1e3c72', marginTop: '30px', marginBottom: '20px' }}>Тарифы:</h2>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              {selectedLecturer.tariffs.map((t, i) => (
                <div key={i} style={{ padding: '20px', background: 'white', borderRadius: '8px', border: '2px solid #2a5298', minWidth: '220px', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{t.name}</p>
                    <p style={{ color: '#2a5298', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '15px' }}>{t.price}</p>
                  </div>
                  <button onClick={() => openForm(t.name)} style={{ padding: '10px', background: '#0066FF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}>Записаться</button>
                </div>
              ))}
            </div>
          </div>
        </main>
        {footer}{modal}
      </div>
    );
  }


  if (currentPage === 'lecturers') {
    return (
      <div style={pageStyle}>
        <Header onNavigate={handleNav} />
        <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
          
          {}
          <ErrorBoundary onReset={() => window.scrollTo({ top: 0 })}>
            <Lecturers onSelectLecturer={handleSelect} />
          </ErrorBoundary>

        </main>
        {footer}
        {modal}
      </div>
    );
  }

  // ГЛАВНАЯ
  return (
    <div style={pageStyle}>
      <Header onNavigate={handleNav} />
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        <section id="home"><Hero onFindLecturer={() => handleNav('lecturers')} /></section>
        <section id="about"><AboutPreview /></section>
        <section id="partners"><Partners /></section>
        <section id="whyus"><WhyUs /></section>
        <section id="contacts"><ContactForm onOpenForm={() => openForm()} /></section>
      </main>
      {footer}{modal}
    </div>
  );
}

export default App;