import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  card: {
    width: '220px',
  },
  media: {
    height: 0,
    paddingTop: '70%',
    backgroundSize: 'contain'
  },
  content: {
    textAlign: 'center'
  },
  favorite: {
    color: 'rgb(255,118,0)'
  }
}))