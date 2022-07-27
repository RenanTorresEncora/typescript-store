import React from 'react';
import { limitProducts } from '../../api/API';
import useFetch from '../../hooks/useFetch';

const Content: React.FC = () => {
  const itemsEl = useFetch(limitProducts(5)).map(
    ({ id, title, price }): JSX.Element => (
      <div key={id}>
        <h4>{title}</h4>
        <span>
          US$
          {price}
        </span>
      </div>
    ),
  );
  return (
    <section>
      <h2>Here&apos;s today offers!</h2>
      {itemsEl}
    </section>
  );
};

export default Content;
