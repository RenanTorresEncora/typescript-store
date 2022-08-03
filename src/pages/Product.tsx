import React from 'react';
import { useParams } from 'react-router-dom';

const Product: React.FC = () => {
  const { id } = useParams();
  return (
    <h2>
      OK
      {' '}
      {id}
      {' '}
    </h2>
  );
};

export default Product;
