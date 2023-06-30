import { useCallback, useRef, useState } from 'react';
import CharacterItem from './CharacterItem/CharacterItem';
import Search from '../Search/Search';
import List from '../UI/List/List';
import Loader from '../UI/Loader/Loader';
import Error from '../UI/Error/Error';
import useGetAll from '../../hooks/useGetAll';
import { RESOURCES } from '../../../config/';
import classes from '../UI/List/List.module.css';

const Characters = () => {
  const [pageNum, setPageNum] = useState(1);
  const [queryName, setQueryName] = useState('');
  const [nameInput, setNameInput] = useState('');

  const { isLoading, error, resourceData, hasMore } = useGetAll(
    RESOURCES.CHARACTERS,
    pageNum,
    queryName
  );

  const observer = useRef();

  const lastCharacterElementRef = useCallback(
    (node) => {
      if (isLoading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum((prev) => prev + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );

  const nameInputHandler = (event) => {
    const name = event.target.value;
    setNameInput(name);
    if (name === '') {
      setQueryName(name);
      setPageNum(1);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (nameInput.trim().length === 0) {
      return;
    }
    setQueryName(nameInput);
    setPageNum(1);
  };

  return (
    <div>
      <Search
        onSubmit={submitHandler}
        nameValue={nameInput}
        onChangeNameValue={nameInputHandler}
      />
      <List className={classes['list--characters']}>
        {resourceData.map((char, i) => {
          if (resourceData.length === i + 1) {
            return (
              <li ref={lastCharacterElementRef} key={i}>
                <CharacterItem key={i} item={char} />
              </li>
            );
          } else {
            return (
              <li key={i}>
                <CharacterItem key={i} item={char} />
              </li>
            );
          }
        })}
        {isLoading && !error && <Loader />}
        {error && (
          <Error>
            <p>
              ¡Oh, vaya! Parece que no encontramos ningún personaje que coincida
              con tu búsqueda.
            </p>
            <p>
              Pero, eh, no te preocupes, seguro que hay muchos otros personajes
              fascinantes por descubrir en este vasto multiverso.
            </p>
          </Error>
        )}
      </List>
    </div>
  );
};

export default Characters;
