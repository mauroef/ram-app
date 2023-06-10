import Logo from '../../../assets/logo.svg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <nav className={classes.header}>
      <h1>
        <img src={Logo} alt='site logo' />
      </h1>
    </nav>
  );
};

export default Header;
