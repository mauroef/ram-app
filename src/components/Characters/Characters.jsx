import CharacterItem from './CharacterItem/CharacterItem';

const Characters = ({ items }) => {
  return (
    <ul>
      {items?.results?.map((item) => (
        <CharacterItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default Characters;
