import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  root: {
    margin: '0 20px 20px',
    padding: '10px',
    width: '200px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '2px 2px 3px rgba(0,0,0,.3)',
    fontSize: '14px',
    color: 'inherit',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all .1s linear',
    '&:hover': {
      boxShadow: '2px 2px 7px rgba(0,0,0,.3)',
    },
    '& *': {
      display: 'block'
    },
    '& .title': {
      padding: '0 0 20px',
      fontWeight: 500,
      fontSize: '16px'
    }
  },
}))