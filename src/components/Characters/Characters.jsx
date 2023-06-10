import CharacterItem from './CharacterItem/CharacterItem';
import classes from './Characters.module.css';

const Characters = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items?.results?.map((item) => (
        <CharacterItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default Characters;
