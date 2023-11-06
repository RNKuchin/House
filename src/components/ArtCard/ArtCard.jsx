import styles from './ArtCard.module.css';
import Button from '../Button/Button';
const ArtCard = ({ dataCard }) => {
  return (
    <>
      <div className={styles.card}>
        <img src={dataCard.urlImg} alt={dataCard.title} />
        <span>{dataCard.author}</span>
        <h3>{dataCard.title}</h3>
        <p>{dataCard.material}</p>
        <span>{dataCard.price}</span>
        <Button textBtn={'В корзину'} />
      </div>
    </>
  );
};

export default ArtCard;
