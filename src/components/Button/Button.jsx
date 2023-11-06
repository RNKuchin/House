import styles from './Button.module.css';
const Button = ({ textBtn, activ, rounded }) => {
  return (
    <button
      className={
        styles.button +
        ' ' +
        (activ ? styles.activ : '') +
        ' ' +
        (rounded ? styles.rounded : '')
      }
    >
      {textBtn}
    </button>
  );
};

export default Button;
