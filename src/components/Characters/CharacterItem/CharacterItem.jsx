import Card from '../../UI/Card/Card';
import Link from '../../UI/Link/Link';
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
    <li className={classes.item}>
      <Card className={classes['item__card']}>
        <img
          className={classes['item__image']}
          src={item.image}
          alt={`image of ${item.name}`}
        />
        <div className={classes['item__description']}>
          <div>
            <h3
              className={`${classes['item__name']} ${showStatus(item.status)}`}
            >
              {item.name}
            </h3>
            <p className={classes['item__species-type']}>
              {`${item.species} ${item.type ? '- ' + item.type : ''}`}
            </p>
          </div>
          <p>First seen in: {item.origin.name}</p>
          <p>Last seen in: {item.location.name}</p>
          <Link className={classes['item__button']} redirect={item.url}>
            More info
          </Link>
        </div>
      </Card>
    </li>
  );
};

export default CharacterItem;
