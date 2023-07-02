import { useCallback, useRef, useState } from 'react';
import LocationItem from './LocationItem/LocationItem';
import Search from '../Search/Search';
import List from '../UI/List/List';
import Loader from '../UI/Loader/Loader';
import Error from '../UI/Error/Error';
import useGetAll from '../../hooks/useGetAll';
import { RESOURCES } from '../../../config/';
import classes from '../UI/List/List.module.css';

const Locations = () => {
  const [pageNum, setPageNum] = useState(1);
  const [queryName, setQueryName] = useState('');
  const [nameInput, setNameInput] = useState('');

  const { isLoading, error, resourceData, hasMore } = useGetAll(
    RESOURCES.LOCATIONS,
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

  return (
    <div>
      <Search
        onSubmit={submitHandler}
        nameValue={nameInput}
        onChangeNameValue={nameInputHandler}
      />
      <List className={classes['list--locations']}>
        <div className={classes['list__header']}>
          <p>Nombre</p>
          <p>Tipo</p>
          <p>Dimensión</p>
          <p></p>
        </div>
        {resourceData.map((loc, i) => {
          if (resourceData.length === i + 1) {
            return (
              <li ref={lastLocationElementRef} key={i}>
                <LocationItem key={i} item={loc}/>
              </li>
            );
          } else {
            return (
              <li key={i}>{<LocationItem key={i} item={loc} />}</li>
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
