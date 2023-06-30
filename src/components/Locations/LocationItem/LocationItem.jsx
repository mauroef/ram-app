import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

const LocationItem = ({ item }) => {
  return (
    <Card>
      <p>{item.name}</p>
      <p>{item.type}</p>
      <p>{item.dimension}</p>
      <Button>Residentes</Button>
      {/* TODO: open modal and show characters related -> item.residents */}
    </Card>
  );
};

export default LocationItem;
