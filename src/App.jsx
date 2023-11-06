import styles from './App.module.css';
import Authors from './components/Authors/Authors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Reproductions from './components/Reproductions/Reproductions';
import Team from './components/Team/Team';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Reproductions />
      <Authors />
      <Team />
      <Footer />
    </>
  );
}

export default App;
