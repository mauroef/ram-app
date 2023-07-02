import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from './LocationItem.module.css';

const LocationItem = ({ item }) => {
  const dimension = (dimension) => dimension === 'unknown' ? <p className={classes['item__dimension--unknown']}>{'Desconocido'}</p> : <p>{dimension}</p>;

  return (
    <Card className={classes['item__card']}>
      <p>{item.name}</p>
      <p>{item.type}</p>
      {dimension(item.dimension)}
      <Button>Residentes</Button>
      {/* TODO: open modal and show characters related -> item.residents */}
    </Card>
  );
};

export default LocationItem;
