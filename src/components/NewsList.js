import React, { useEffect, useContext, useRef } from 'react';
import { NewsContext } from '../context/news-context';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import NewsCard from '../components/NewsCard';
import Loader from '../components/Loader';

import { useNewsListStyles } from '../styles';

const NewsList = () => {
  const classes = useNewsListStyles();
  const newsRef = useRef();

  const {
    news: { page, articles, isLazy },
    fetchNews,
    increasePage
  } = useContext(NewsContext);

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  useEffect(() => {
    const { current } = newsRef;
    if (current) {
      current.onscroll = e => {
        const { scrollHeight, scrollTop, clientHeight } = e.target;
        if (scrollHeight - (scrollTop + clientHeight) < 10 && !isLazy) {
          increasePage();
        }
      };
    }
  }, [isLazy]);

  return (
    <Grid item xs={12} md={4} lg={3} className={classes.newsGrid}>
      <Box component={Paper} square className={classes.newsWrapper} ref={newsRef}>
        {articles.map((article, index) => (
          <NewsCard key={index} {...article} />
        ))}
        {(!articles.length || isLazy) && <Loader />}
      </Box>
    </Grid>
  );
};

export default NewsList;
