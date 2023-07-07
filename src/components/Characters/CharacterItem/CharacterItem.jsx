import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from './CharacterItem.module.css';

const CharacterItem = ({
  item,
  onShowDetail,
}) => {
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

  const showDetailHandler = () => {
    onShowDetail(item.id);
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
            Origen: <span title={item.origin.name}>{item.origin.name}</span>
          </p>
          <p>
            Última ubicación:{' '}
            <span title={item.location.name}>{item.location.name}</span>
          </p>
        </div>
        <div className={classes['item__footer']}>
          <Button
            className={classes['item__button']}
            onClick={showDetailHandler}
          >
            Más información
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CharacterItem;
