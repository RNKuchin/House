import Button from '../Button/Button';
import styles from './Authors.module.css';

const Authors = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>Новая коллекция французских авторов</h2>
        <p>
          Сложно сказать, почему акционеры крупнейших компаний призывают нас к
          новым свершениям, которые, в свою очередь, должны быть заблокированы в
          рамках своих собственных рациональных ограничений.
        </p>
        <p>
          Принимая во внимание показатели успешности, граница обучения кадров
          предопределяет высокую востребованность направлений прогрессивного
          развития.
        </p>

        <Button textBtn={'Ознакомиться'} />
      </div>
    </section>
  );
};

export default Authors;
