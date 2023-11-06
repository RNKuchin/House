import Button from '../Button/Button';
import styles from './Reproductions.module.css';
import ArtCard from '../ArtCard/ArtCard';
import dataCard from '../../dataCard';

const Reproductions = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrap}>
          <h2>Репродукции</h2>
          <div className={styles.btnList}>
            <Button textBtn={'Франция'} activ={'activ'} rounded={'rounded'} />
            <Button textBtn={'Германия'} rounded={'rounded'} />
            <Button textBtn={'Англия'} rounded={'rounded'} />
          </div>
        </div>
        <div className={styles.grid}>
          {dataCard.map((card) => (
            <ArtCard dataCard={card} key={card.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reproductions;
