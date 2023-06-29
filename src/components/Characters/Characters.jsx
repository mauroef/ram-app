import { useCallback, useRef, useState } from 'react';
import CharacterItem from './CharacterItem/CharacterItem';
import useGetCharacters from '../../hooks/useGetCharacters';
import classes from './Characters.module.css';

const Characters = () => {
  const [pageNum, setPageNum] = useState(1);
  const [queryName, setQueryName] = useState('');

  const { isLoading, error, characters, hasMore } = useGetCharacters(
    pageNum,
    queryName
  );

  const observer = useRef();
  const nameInputRef = useRef();

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

  const changeHanlder = (event) => {
    event.preventDefault();
    const enteredNameRef = nameInputRef.current.value;
    if (enteredNameRef.trim().length === 0) {
      // TODO: flag empty value
      return;
    }
    setQueryName(enteredNameRef);
    setPageNum(1);
  };

  return (
    <>
      <form onSubmit={changeHanlder}>
        <input type='text' ref={nameInputRef} />
        <button type='submit'>search</button>
      </form>
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
        <div>{isLoading && !error && 'Loading...'}</div>
        <div>{error && 'Error... '}</div>
      </ul>
    </>
  );
};

export default Characters;
