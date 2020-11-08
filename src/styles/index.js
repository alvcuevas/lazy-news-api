import { makeStyles } from '@material-ui/core';

const useNewsListStyles = makeStyles({
  newsGrid: {
    margin: 'auto'
  },
  newsWrapper: {
    height: '100vh',
    overflow: 'auto',
    overflowX: 'hidden'
  }
});

const useNewsCardStyles = makeStyles({
  title: {
    fontFamily: '"Baloo 2"',
    fontSize: '1rem',
    lineHeight: '1.2rem'
  },
  snippet: {
    fontFamily: '"Baloo 2"',
    lineHeight: '1.2rem',
    marginBottom: '.5em'
  },
  footer: {
    fontFamily: '"Baloo 2"',
    fontSize: '.8rem',
    opacity: '.6'
  }
});

export { useNewsListStyles, useNewsCardStyles };
