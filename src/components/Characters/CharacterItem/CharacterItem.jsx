import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/BUtton';
import classes from './CharacterItem.module.css';

const CharacterItem = ({ item }) => {
  const showStatus = (status) => {
    let statusClass = '';
    if (status === 'Dead') {
      statusClass = classes.dead;
    }
    if (status === 'unknown') {
      statusClass = classes.unknown;
    }
    return statusClass;
  };

  return (
    <Card className={classes['item__card']}>
      <div className={classes['item__image-container']}>
        <img
          className={classes['item__image']}
          src={item.image}
          alt={`image of ${item.name}`}
          title={item.name}
        />
        <img
          className={classes['item__image--shadow']}
          src={item.image}
          aria-hidden='true'
        />
      </div>
      <div className={classes['item__content']}>
        <div className={classes['item__header']}>
          <h3
            className={`${classes['item__name']} ${showStatus(item.status)}`}
            title={item.name}
          >
            {item.name}
          </h3>
          <p className={classes['item__species-type']}>
            {`${item.species} ${item.type ? '- ' + item.type : ''}`}
          </p>
        </div>
        <div className={classes['item__description']}>
          <p>
            Origen: <span>{item.origin.name}</span>
          </p>
          <p>
            Última ubicación: <span>{item.location.name}</span>
          </p>
          <Button className={classes['item__button']} redirect={item.url}>
            Más información
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CharacterItem;
