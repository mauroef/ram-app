import Spinner from '../../../assets/loader.svg';
import classes from './Loader.module.css';

const Loader = () => {
  return (
    <div className={classes['loader__container']}>
      <img src={Spinner} className={classes['loader__spinner']} alt='loading' />
    </div>
  );
};

export default Loader;
