import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from './EpisodeItem.module.css';

const MONTHS = {
  january: 'enero',
  february: 'febrero',
  march: 'marzo',
  april: 'abril',
  may: 'mayo',
  june: 'junio',
  july: 'julio',
  august: 'agosto',
  september: 'septiembre',
  october: 'octubre',
  november: 'noviembre',
  december: 'diciembre',
};

const EpisodeItem = ({ item, onShowDetail }) => {
  const getSpanishMonth = (date) => {
    let newDate = date.split(' ');
    let newMonth = newDate[0].toLowerCase();

    for (const m in MONTHS) {
      if (newMonth === m) {
        newMonth = MONTHS[m];
      }
    }

    return [
      newMonth.charAt(0).toUpperCase() + newMonth.slice(1),
      newDate[1],
      newDate[2],
    ].join(' ');
  };

  const showDetailHandler = () => {
    onShowDetail(item.id);
  };

  return (
    <Card className={classes['item__card']}>
      <p>{item.name}</p>
      <p>{getSpanishMonth(item.air_date)}</p>
      <p>{item.episode}</p>
      <Button onClick={showDetailHandler}>Detalle</Button>
    </Card>
  );
};

export default EpisodeItem;
