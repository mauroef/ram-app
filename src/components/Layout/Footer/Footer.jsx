import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes['footer__inner']}>
        <p>
          ¡Gracias, <a href='https://rickandmortyapi.com/'>rickandmortyapi</a>,
          por hacer posible este viaje intergaláctico y ayudarnos a llevar la
          magia de Rick and Morty a todos los rincones del universo!
        </p>
        <div className={classes['footer__credit']}>
          <p>
            Desarrollado por <a href='https://mauroef.dev/'>mauroef</a>
            {' - '} {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
