import { useCallback, useRef, useState } from 'react';
import EpisodeItem from './EpisodeItem/EpisodeItem';
import Search from '../Search/Search';
import List from '../UI/List/List';
import Loader from '../UI/Loader/Loader';
import Error from '../UI/Error/Error';
import useGetAll from '../../hooks/useGetAll';
import { RESOURCES } from '../../../config/';
import classes from '../UI/List/List.module.css';

const Episodes = () => {
  const [pageNum, setPageNum] = useState(1);
  const [queryName, setQueryName] = useState('');
  const [nameInput, setNameInput] = useState('');

  const { isLoading, error, resourceData, hasMore } = useGetAll(
    RESOURCES.EPISODES,
    pageNum,
    queryName
  );

  const observer = useRef();

  const lastLocationElementRef = useCallback(
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

  const header = (
    <header className={classes['list__header']}>
      <div
        className={`${classes['list__header-inner']} ${classes['list__header-inner--episodes']}`}
      >
        <p>Nombre</p>
        <p>Fecha de Emisión</p>
        <p>Número</p>
        <p></p>
      </div>
    </header>
  );

  return (
    <div>
      <Search
        onSubmit={submitHandler}
        nameValue={nameInput}
        onChangeNameValue={nameInputHandler}
      />
      <List className={classes['list--locations']}>
        {resourceData.length > 0 && header}
        {resourceData.map((loc, i) => {
          if (resourceData.length === i + 1) {
            return (
              <li ref={lastLocationElementRef} key={i}>
                <EpisodeItem key={i} item={loc} />
              </li>
            );
          } else {
            return <li key={i}>{<EpisodeItem key={i} item={loc} />}</li>;
          }
        })}
        {isLoading && !error && <Loader />}
        {error && (
          <Error>
            <p>
              ¡Oh, wow! Parece que no podemos encontrar ningún episodio que
              coincida con tu búsqueda.
            </p>
            <p>
              Mientras tanto, te invito a explorar las otras secciones. Tal vez
              encuentres información fascinante sobre los personajes o las
              locaciones de la serie. Quién sabe, podría haber secretos ocultos
              y referencias interesantes que te sorprenderán.
            </p>
          </Error>
        )}
      </List>
    </div>
  );
};

export default Episodes;
