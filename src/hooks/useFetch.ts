import { useState, useEffect } from 'react';

const useFetch = (endpoint: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [endpoint]);

  return data;
};

export default useFetch;
