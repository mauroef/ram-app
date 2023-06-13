import Logo from '../../../assets/logo.svg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <nav className={classes.header}>
      <h1>
        <a href='/' aria-label={'Home'}>
          <img src={Logo} alt='site logo' />
        </a>
      </h1>
    </nav>
  );
};

export default Header;
