import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from './LocationItem.module.css';

const LocationItem = ({ item, onShowDetail }) => {
  const dimension = (dimension) =>
    dimension === 'unknown' ? (
      <p className={classes['item__dimension--unknown']}>{'Desconocido'}</p>
    ) : (
      <p>{dimension}</p>
    );

  const showDetailHandler = () => {
    onShowDetail(item.id);
  };

  return (
    <Card className={classes['item__card']}>
      <p>{item.name}</p>
      <p>{item.type}</p>
      {dimension(item.dimension)}
      <Button onClick={showDetailHandler}>Detalle</Button>
    </Card>
  );
};

export default LocationItem;
