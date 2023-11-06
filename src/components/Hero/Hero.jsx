import hero from '../../assets/hero.png';
import Button from '../Button/Button';
import styles from './Hero.module.css';
const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.flex}`}>
        <div>
          <img src={hero} alt="Hero" />
        </div>
        <div className={styles.text}>
          <h1>
            Реплики картин от <span>Ink. House</span>
          </h1>
          <p>
            Высокое качество отрисовки на плотной бумаге или льняном холсте.
            Редкие произведения, доступные цены.
          </p>
          <Button textBtn="Продукция" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
