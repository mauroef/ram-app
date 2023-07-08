import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import Modal from '../../UI/Modal/Modal';
import classes from './CharacterDetail.module.css';

const CharacterDetail = ({ detail, onClose }) => {
  const modalContent = (
    <main className={classes['detail__main']}>
      <div className={classes['detail__image-container']}>
        <img
          className={classes['detail__image']}
          src={detail.image}
          alt={`image of ${detail.name}`}
          title={detail.name}
        />
        <img
          className={classes['detail__image--shadow']}
          src={detail.image}
          aria-hidden='true
          '
        />
      </div>
      <Card className={classes['detail__info']}>
        <p>
          <span>Nombre: </span>
          {detail.name}
        </p>
        <p>
          <span>Estado: </span>
          {detail.status}
        </p>
        <p>
          <span>Especie: </span>
          {detail.species}
        </p>
        {detail.type && (
          <p>
            <span>Tipo: </span>
            {detail.type}
          </p>
        )}
        <p>
          <span>Género: </span>
          {detail.gender}
        </p>
        <p>
          <span>Origen: </span>
          {detail.origin.name}
        </p>
        <p>
          <span>Última aparición: </span>
          {detail.location.name}
        </p>
      </Card>
      <Card className={classes['detail__episodes']}>
        <p>Episodios</p>
        <ul className={classes['detail__episodes-list']}>
          {detail.episode.map((ep, i) => (
            <li className={classes['detail__episodes-item']} key={i}>
              {ep.split('/').pop()}
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

export default CharacterDetail;
