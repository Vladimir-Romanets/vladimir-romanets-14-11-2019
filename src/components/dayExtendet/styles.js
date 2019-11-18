import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  card: {
    margin: '0 20px 20px 0',
    width: '220px',
  },
  header: {
    '& div': {
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
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