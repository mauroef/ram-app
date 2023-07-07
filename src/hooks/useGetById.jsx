import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';

function useGetById(resource, ids) {
  const [resourceData, setResourceData] = useState([]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    let cancel;
    if (ids.length === 0) {
      return;
    }

    axios
      .get(`${BASE_URL}${resource}/${ids[0]}`, {
        cancelToken: new CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setResourceData(() => {
          const response = res.data;
          if (typeof response === 'object') {
            console.log('one result');
            return [response];
          }
          if (Array.isArray(response)) {
            console.log('multiple result');
            return response;
          }
          return [];
        });
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          return;
        }
      });

    return () => cancel();
  }, [resource, ids]);

  return [resourceData];
}

export default useGetById;
