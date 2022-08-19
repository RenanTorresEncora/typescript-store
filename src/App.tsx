import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';
import CartContextProvider from './contexts/CartContext';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <CartContextProvider>
      <Header />
      <Content />
    </CartContextProvider>
  </BrowserRouter>
);

export default App;
