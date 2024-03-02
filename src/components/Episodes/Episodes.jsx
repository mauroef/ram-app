import { useCallback, useEffect, useRef, useState } from 'react';
import EpisodeItem from './EpisodeItem/EpisodeItem';
import EpisodeDetail from './EpisodeDetail/EpisodeDetail';
import Search from '../Search/Search';
import List from '../UI/List/List';
import Loader from '../UI/Loader/Loader';
import Error from '../UI/Error/Error';
import useGetById from '../../hooks/useGetById';
import useGetAll from '../../hooks/useGetAll';
import useBodyScroll from '../../hooks/useBodyScroll';
import { RESOURCES } from '../../../config/';
import classes from '../UI/List/List.module.css';

const Episodes = () => {
  // modal
  const [detailIsShown, setDetailIsShown] = useState(false);
  const [detailId, setDetailId] = useState([]);
  const [characterIds, setCharacterIds] = useState([]);
  // search
  const [pageNum, setPageNum] = useState(1);
  const [queryName, setQueryName] = useState('');
  const [nameInput, setNameInput] = useState('');
  // scroll
  const [scrollIsBlocked, setScrollIsBlocked] = useBodyScroll();

  const { isLoading, error, resourceData, hasMore } = useGetAll(
    RESOURCES.EPISODES,
    pageNum,
    queryName
  );

  const [detailData] = useGetById(RESOURCES.EPISODES, detailId);
  const [charactersData] = useGetById(RESOURCES.CHARACTERS, characterIds);

  useEffect(() => {
    if (detailData && detailData.length > 0) {
      const newCharactersIds = detailData[0].characters.map((character) =>
        character.split('/').pop()
      );
      setCharacterIds(newCharactersIds);
    }
  }, [detailData]);

  const showDetailHandler = (id) => {
    setDetailId([id]);
    if (!scrollIsBlocked) {
      setScrollIsBlocked(true);
    }
    setDetailIsShown(true);
  };

  const hideDetailHandler = () => {
    if (scrollIsBlocked) {
      setScrollIsBlocked(false);
    }
    setDetailIsShown(false);
  };

  const observer = useRef();

  const lastEpisodeElementRef = useCallback(
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
        <p>Fecha de estreno</p>
        <p>Número</p>
      </div>
    </header>
  );

  return (
    <div>
      {detailIsShown && detailId.length > 0 && detailData.length > 0 && (
        <EpisodeDetail
          detail={detailData[0]}
          characters={charactersData[0]}
          onClose={hideDetailHandler}
        />
      )}
      <Search
        onSubmit={submitHandler}
        nameValue={nameInput}
        onChangeNameValue={nameInputHandler}
      />
      <List className={classes['list--locations']}>
        {resourceData.length > 0 && header}
        {resourceData.map((epi, i) => {
          if (resourceData.length === i + 1) {
            return (
              <li ref={lastEpisodeElementRef} key={i}>
                <EpisodeItem
                  key={i}
                  item={epi}
                  onShowDetail={showDetailHandler}
                />
              </li>
            );
          } else {
            return (
              <li key={i}>
                {
                  <EpisodeItem
                    key={i}
                    item={epi}
                    onShowDetail={showDetailHandler}
                  />
                }
              </li>
            );
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
