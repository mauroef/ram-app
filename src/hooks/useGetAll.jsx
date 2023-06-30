import { useState, useEffect } from 'react';
import axios from 'axios';
import {BASE_URL} from '../../config';

function useGetAll(resource, pageNum, queryName) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resourceData, setResourceData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setResourceData([]);
  }, [queryName]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    let cancel;

    const searchByName = queryName !== '' ? `&name=${queryName}` : '';

    setIsLoading(true);
    setError(false);
    console.log({URL: `${BASE_URL}${resource}?page=${pageNum}${searchByName}`});
    axios
      .get(
        `${BASE_URL}${resource}?page=${pageNum}${searchByName}`,
        {
          cancelToken: new CancelToken((c) => (cancel = c)),
        }
      )
      .then((res) => {
        setResourceData((prev) => {
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
  }, [resource, pageNum, queryName]);

  return { isLoading, error, resourceData, hasMore };
}

export default useGetAll;
