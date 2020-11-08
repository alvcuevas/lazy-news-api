import React from 'react';
import ReactDOM from 'react-dom';
import NewsList from './components/NewsList';
import { NewsProvider } from './context/news-context';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <NewsProvider>
      <NewsList />
    </NewsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
