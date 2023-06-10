import Card from '../../UI/Card/Card';
// import backgroundImage from '../../../assets/background.jpg';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes['hero__inner']}>
      <Card className={classes['hero__card']}>
        <p>
          ¡Wubba lubba dub dub! Bienvenidos a mi dimensión interactiva. Aquí
          podrás sumergirte en el vasto universo de Rick and Morty como nunca
          antes. Prepárate para explorar y descubrir todos los secretos de esta
          serie que desafía la realidad.
        </p>
      </Card>
      </div>
    </section>
  );
};

export default Hero;
