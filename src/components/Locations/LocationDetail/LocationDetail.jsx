import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import Modal from '../../UI/Modal/Modal';
import classes from './LocationDetail.module.css';

const LocationDetail = ({ detail, residents, onClose }) => {
  const modalContent = (
    <main className={classes['detail__main']}>
      <Card className={classes['detail__info']}>
        <p>
          <span>Nombre: </span>
          {detail.name}
        </p>
        <p>
          <span>Tipo: </span>
          {detail.type}
        </p>
        <p>
          <span>Dimensión: </span>
          {detail.dimension}
        </p>
      </Card>
      <Card className={classes['detail__residents']}>
        <p>Residentes</p>
        <ul className={classes['detail__residents-list']}>
          {residents.length && residents.map((res, i) => (
            <li className={classes['detail__residents-item']} key={i}>
              {res.name}
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

export default LocationDetail;
