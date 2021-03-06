import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useNewsCardStyles } from '../styles';

const NewsCard = ({ source, headline, snippet, web_url, multimedia, pub_date }) => {
  const classes = useNewsCardStyles();
  return (
    <Card square>
      <CardActionArea onClick={() => window.open(web_url)}>
        {multimedia[0] && (
          <CardMedia
            component="img"
            alt={headline.main}
            height="140"
            image={`https://www.nytimes.com/${multimedia[0]?.url}`}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" className={classes.title}>
            {headline.main}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.snippet}
          >
            {snippet}
          </Typography>
          <Grid container justify="space-between">
            <Grid item>
              <Typography color="textSecondary" className={classes.footer}>
                {source}
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="textSecondary" className={classes.footer}>
                {new Date(pub_date).toDateString()}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
