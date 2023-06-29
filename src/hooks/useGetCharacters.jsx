import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';
const RESOURCES = {
  CHARACTERS: '/character',
  LOCATIONS: '/locations',
  EPISODES: '/episodes',
};

function useGetCharacters(pageNum, queryName) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setCharacters([]);
  }, [queryName]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    let cancel;

    const searchByName = queryName !== '' ? `&name=${queryName}` : '';

    setIsLoading(true);
    setError(false);
    axios
      .get(
        `${BASE_URL}${RESOURCES.CHARACTERS}?page=${pageNum}${searchByName}`,
        {
          cancelToken: new CancelToken((c) => (cancel = c)),
        }
      )
      .then((res) => {
        setCharacters((prev) => {
          return [...new Set([...prev, ...res.data.results])];
        });
        setHasMore(res.data.info.next !== null);
        setIsLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          return;
        }
        setError(err);
      });

    return () => cancel();
  }, [pageNum, queryName]);

  return { isLoading, error, characters, hasMore };
}

export default useGetCharacters;
