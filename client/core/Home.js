import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import seashellImg from '../assets/images/seashell.jpg'

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5)
  }, 
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  }, 
  media: {
    minHeight: 330
  }
})

const Home = (props) => {
  const { classes } = props
  return (
    <div> 
      <Card className={classes.card}>
        <Typography type="headline" component="h2" className={classes.title}>Home Page</Typography>
        <CardMedia className={classes.media} image={seashellImg} title="Unicorn Shells" /> 
        <CardContent>
          <Typography type="body1" component="p">
            Welcome to the MERN Skeleton home page.
          </Typography>
        </CardContent>
      </Card>
    </div> 
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)