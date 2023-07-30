import Link from '../UI/Link/Link';
import { PAGE } from '../../../config/index';
import classes from './PageNavigation.module.css';

const PageNavigation = ({ currentPage }) => {
  return (
    <nav className={classes.nav}>
      <div className={classes['nav__inner']}>
        {currentPage !== PAGE.CHARACTERS && (
          <Link className={classes['nav__item']} redirect='/characters'>Personajes</Link>
        )}
        {currentPage !== PAGE.LOCATIONS && (
          <Link className={classes['nav__item']} redirect='/locations'>Locaciones</Link>
        )}
        {currentPage !== PAGE.EPISODES && (
          <Link className={classes['nav__item']} redirect='/episodes'>Episodios</Link>
        )}
      </div>
    </nav>
  );
};

export default PageNavigation;
