import { useCallback, useRef, useState } from 'react';
import CharacterItem from './CharacterItem/CharacterItem';
import CharacterDetail from './CharacterDetail/CharacterDetail';
import Search from '../Search/Search';
import List from '../UI/List/List';
import Loader from '../UI/Loader/Loader';
import Error from '../UI/Error/Error';
import useGetById from '../../hooks/useGetById';
import useGetAll from '../../hooks/useGetAll';
import { RESOURCES } from '../../../config/';
import classes from '../UI/List/List.module.css';

const Characters = () => {
  const [detailIsShown, setDetailIsShown] = useState(false);
  const [detailId, setDetailId] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [queryName, setQueryName] = useState('');
  const [nameInput, setNameInput] = useState('');

  const { isLoading, error, resourceData, hasMore } = useGetAll(
    RESOURCES.CHARACTERS,
    pageNum,
    queryName
  );

  const [detailData] = useGetById(RESOURCES.CHARACTERS, detailId);

  const showDetailHandler = (id) => {
    setDetailId([id]);
    setTimeout(() => {
      setDetailIsShown(true);
    }, 300);
  };

  const hideDetailHandler = () => {
    setDetailIsShown(false);
  };

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
      {detailIsShown && detailId.length > 0 && (
        <CharacterDetail detail={detailData[0]} onClose={hideDetailHandler} />
      )}
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
                <CharacterItem
                  key={i}
                  item={char}
                  detailIsShown={detailIsShown}
                  onCloseDetail={hideDetailHandler}
                  onShowDetail={showDetailHandler}
                />
              </li>
            );
          } else {
            return (
              <li key={i}>
                <CharacterItem
                  key={i}
                  item={char}
                  detailIsShown={detailIsShown}
                  onCloseDetail={hideDetailHandler}
                  onShowDetail={showDetailHandler}
                />
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
