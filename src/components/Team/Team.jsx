import styles from './Team.module.css';
import teamPng from '../../assets/team.png';
import one from '../../assets/1.png';
import two from '../../assets/2.png';
import fre from '../../assets/3.png';

const Team = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.flex}>
          <img src={teamPng} alt="" />
          <div>
            <h2>Наша команда</h2>
            <p>
              Значимость этих проблем настолько очевидна, что базовый вектор
              развития позволяет оценить значение экспериментов, поражающих по
              своей масштабности и грандиозности. Мы вынуждены отталкиваться от
              того, что консультация с широким активом.
            </p>
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={fre} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
