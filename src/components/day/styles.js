import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    padding: '10px',
    borderRadius: '10px',
    fontSize: '14px',
    overflow: 'hidden',
    boxShadow: '2px 2px 7px rgba(0,0,0,.3)',
    width: '170px',
    background: '#fff',
    '& .row': {
      padding: '0 0 10px'
    },
    '& .flex': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    '& .bold': {
      fontWeight: 500,
    },
    '& .center': {
      textAlign: 'center'
    },
    '& img': {
      width: '50px',
      height: 'auto'
    }
  },
})

export default useStyles