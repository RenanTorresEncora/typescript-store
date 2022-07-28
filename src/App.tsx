import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Header />
    <hr />
    <Content />
  </>
);

export default App;
