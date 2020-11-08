import React, { createContext, useReducer } from 'react';

const NewsContext = createContext();

const initialState = {
  page: 0,
  articles: [],
  isLazy: true
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_PAGE':
      return {
        ...state,
        page: state.page + 1,
        isLazy: true
      };
    case 'SET_ARTICLES':
      return {
        ...state,
        articles: [...state.articles, ...action.articles],
        isLazy: false
      };
    default:
      throw new Error();
  }
};

const NewsProvider = ({ children }) => {
  const [news, dispatch] = useReducer(reducer, initialState);
  const API_URI = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;

  const fetchNews = async page => {
    try {
      const res = await fetch(
        `${API_URI}?api-key=${process.env.REACT_APP_NEWS_API_KEY}&fq=news_desk:(%22Culture%22)&sort=newest&page=${page}`
      );
      const data = await res.json();
      setArticles(data.response.docs);
    } catch (err) {
      throw new Error(err);
    }
  };

  const setArticles = articles => {
    dispatch({ type: 'SET_ARTICLES', articles });
  };

  const increasePage = () => {
    dispatch({ type: 'INCREASE_PAGE' });
  };

  return (
    <NewsContext.Provider value={{ news, fetchNews, increasePage }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider, NewsContext };
