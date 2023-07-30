import { useCallback, useEffect, useRef, useState } from 'react';
import LocationItem from './LocationItem/LocationItem';
import LocationDetail from './LocationDetail/LocationDetail';
import Search from '../Search/Search';
import List from '../UI/List/List';
import Loader from '../UI/Loader/Loader';
import Error from '../UI/Error/Error';
import useGetById from '../../hooks/useGetById';
import useGetAll from '../../hooks/useGetAll';
import { RESOURCES } from '../../../config/';
import classes from '../UI/List/List.module.css';

const Locations = () => {
  // modal
  const [detailIsShown, setDetailIsShown] = useState(false);
  const [detailId, setDetailId] = useState([]);
  const [residentsIds, setResidentsIds] = useState([]);
  // search
  const [pageNum, setPageNum] = useState(1);
  const [queryName, setQueryName] = useState('');
  const [nameInput, setNameInput] = useState('');

  const { isLoading, error, resourceData, hasMore } = useGetAll(
    RESOURCES.LOCATIONS,
    pageNum,
    queryName
  );

  const [detailData] = useGetById(RESOURCES.LOCATIONS, detailId);
  const [residentsData] = useGetById(RESOURCES.CHARACTERS, residentsIds);

  useEffect(() => {
    if (detailData && detailData.length > 0) {
      const newCharactersIds = detailData[0].residents.map((resident) =>
      resident.split('/').pop()
      );
      setResidentsIds(newCharactersIds);
    }
  }, [detailData]);

  const showDetailHandler = (id) => {
    setDetailId([id]);
    setTimeout(() => {
      setDetailIsShown(true);
    }, 600);
  };

  const hideDetailHandler = () => {
    setDetailIsShown(false);
  };

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
        className={`${classes['list__header-inner']} ${classes['list__header-inner--locations']}`}
      >
        <p>Nombre</p>
        <p>Tipo</p>
        <p>Dimensión</p>
      </div>
    </header>
  );

  return (
    <div>
      {detailIsShown && detailId.length > 0 && (
        <LocationDetail
          detail={detailData[0]}
          residents={residentsData[0]}
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
        {resourceData.map((loc, i) => {
          if (resourceData.length === i + 1) {
            return (
              <li ref={lastLocationElementRef} key={i}>
                <LocationItem
                  key={i}
                  item={loc}
                  onShowDetail={showDetailHandler}
                />
              </li>
            );
          } else {
            return (
              <li key={i}>
                {
                  <LocationItem
                    key={i}
                    item={loc}
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
              ¡Oh jeez! Parece que no encontramos ninguna locación que coincida
              con tu búsqueda.
            </p>
            <p>
              Quién sabe, tal vez podamos tropezarnos con alguna dimensión
              oculta o una nueva locación impresionante que ni siquiera sabíamos
              que existía. La vida es así de impredecible, ¿verdad?
            </p>
          </Error>
        )}
      </List>
    </div>
  );
};

export default Locations;
