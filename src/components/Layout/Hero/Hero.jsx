import Card from '../../UI/Card/Card';
// import backgroundImage from '../../../assets/background.jpg';
import classes from './Hero.module.css';

const Hero = ({ children, backgroundURL }) => {
  return (
    <section
      className={classes.hero}
      style={{ backgroundImage: `url(${backgroundURL})` }}
    >
      <div className={classes['hero__inner']}>
        <Card className={classes['hero__card']}>{children}</Card>
      </div>
    </section>
  );
};

export default Hero;
