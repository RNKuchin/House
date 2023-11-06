import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.bg}>
      <div className={`container ${styles.flex}`}>
        <Logo />
        <Nav />
      </div>
    </div>
  );
};

export default Header;
