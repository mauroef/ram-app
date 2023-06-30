import { useCallback, useRef, useState } from 'react';
import CharacterItem from './CharacterItem/CharacterItem';
import Search from '../Search/Search';
import Loader from '../UI/Loader/Loader';
import useGetCharacters from '../../hooks/useGetCharacters';
import classes from './Characters.module.css';

const Characters = () => {
  const [pageNum, setPageNum] = useState(1);
  const [queryName, setQueryName] = useState('');
  const [nameInput, setNameInput] = useState('');

  const { isLoading, error, characters, hasMore } = useGetCharacters(
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
      <Search onSubmit={submitHandler} nameValue={nameInput} onChangeNameValue={nameInputHandler}/>
      <ul className={classes.list}>
        {characters.map((char, i) => {
          if (characters.length === i + 1) {
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
        <div>{error && 'Error... '}</div>
      </ul>
    </div>
  );
};

export default Characters;
