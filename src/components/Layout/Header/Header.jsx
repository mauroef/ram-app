import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <nav className={classes.header}>
      <h1>
        <Link to='/' className={classes.logo}>
          <img src={Logo} alt='site logo' />
        </Link>
      </h1>
    </nav>
  );
};

export default Header;
