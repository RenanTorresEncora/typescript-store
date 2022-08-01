import { SaleItemType } from '../components/SaleCard';

export const getDataFromAPI = (endpoint: string) => new Promise<SaleItemType[]>((res, rej) => {
  const xmlReq = new XMLHttpRequest();
  xmlReq.responseType = 'json';
  xmlReq.onreadystatechange = () => {
    if (xmlReq.readyState === XMLHttpRequest.DONE) {
      if (xmlReq.status === 200) {
        res(xmlReq.response);
      } else {
        rej(Error('Error occurred'));
      }
    }
  };
  xmlReq.open('GET', endpoint);
  xmlReq.send();
});
interface IProduct {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}
// eslint-disable-next-line max-len
export const postDataOnAPI = (endpoint: string, product: IProduct) => new Promise<string>((res, rej) => {
  const xmlReq = new XMLHttpRequest();
  if (xmlReq.readyState === XMLHttpRequest.DONE) {
    if (xmlReq.status === 200) {
      res(xmlReq.response);
    } else {
      rej(Error('404 Error'));
    }
  }
  xmlReq.open('POST', endpoint);
  xmlReq.setRequestHeader('Content-Type', 'application/json');
  xmlReq.send(JSON.stringify(product));
});
