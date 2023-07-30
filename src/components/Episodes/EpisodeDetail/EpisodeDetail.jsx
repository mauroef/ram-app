import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import Modal from '../../UI/Modal/Modal';
import classes from './EpisodeDetail.module.css';

const EpisodeDetail = ({ detail, characters, onClose }) => {
  const modalContent = (
    <main className={classes['detail__main']}>
      <Card className={classes['detail__info']}>
        <p>
          <span>Nombre: </span>
          {detail.name}
        </p>
        <p>
          <span>Fecha de estreno: </span>
          {detail.air_date}
        </p>
        <p>
          <span>Número: </span>
          {detail.episode}
        </p>
      </Card>
      <Card className={classes['detail__characters']}>
        <p>Personajes</p>
        <ul className={classes['detail__characters-list']}>
          {characters.length && characters.map((ch, i) => (
            <li className={classes['detail__characters-item']} key={i}>
              {ch.name}
            </li>
          ))}
        </ul>
      </Card>
    </main>
  );

  const modalActions = (
    <footer className={classes['detail__footer']}>
      <Button className={classes['detail__button']} onClick={onClose}>
        Cerrar
      </Button>
    </footer>
  );

  return (
    <Modal onClose={onClose}>
      {modalContent}
      {modalActions}
    </Modal>
  );
};

export default EpisodeDetail;
