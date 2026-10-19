import Hero from '../components/Hero/Hero';
import AboutPreview from '../components/AboutPreview/AboutPreview';
import Partners from '../components/Partners/Partners';
import LecturerPreview from '../components/LecturerPreview/LecturerPreview';

function Home() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <Partners />
      <LecturerPreview />
    </div>
  );
}

export default Home;