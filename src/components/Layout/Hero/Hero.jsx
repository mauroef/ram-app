import Card from '../../UI/Card/Card';
import classes from './Hero.module.css';

const Hero = ({ children, page }) => {
  return (
    <section className={`${classes.hero} ${page}`}>
      <div className={classes['hero__inner']}>
        <Card className={classes['hero__card']}>{children}</Card>
      </div>
    </section>
  );
};

export default Hero;
