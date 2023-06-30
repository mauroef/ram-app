import Button from '../UI/Button/Button';
import classes from './Search.module.css';

const Search = (props) => {
  return (
    <form
      className={classes.form}
      onSubmit={props.onSubmit}
      autoComplete={'off'}
    >
      <label className={classes['form__label']} htmlFor='name'>
        nombre
      </label>
      <input
        className={classes['form__input']}
        type='text'
        name='nombre'
        value={props.nameValue}
        onChange={props.onChangeNameValue}
        placeholder='Búsqueda por nombre...'
      />
      <Button
        className={classes['form__button']}
        type='submit'
        isDisabled={!props.nameValue}
      >
        Buscar
      </Button>
    </form>
  );
};

export default Search;
