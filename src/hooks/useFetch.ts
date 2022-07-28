import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const useFetch = (endpoint: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataWithXmlHttpReq(endpoint, setData);
  }, [endpoint]);

  return data;
};

const getDataWithXmlHttpReq = (
  endpoint: string,
  setData: Dispatch<SetStateAction<never[]>>,
) => {
  const xmlReq = new XMLHttpRequest();
  xmlReq.responseType = 'json';
  xmlReq.onload = () => {
    setData(xmlReq.response);
  };
  xmlReq.open('GET', endpoint);
  xmlReq.send();
};

const getDataWithFetchAPI = (
  endpoint: string,
  setData: Dispatch<SetStateAction<never[]>>,
) => {
  fetch(endpoint)
    .then((res) => res.json())
    .then((json) => setData(json));
};

export default useFetch;
