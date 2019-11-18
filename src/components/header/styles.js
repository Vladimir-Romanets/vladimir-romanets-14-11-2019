import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  root: {
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'center',
    position: 'static',
    fontSize: '16px'
  },
  link: {
    padding: '5px 20px',
    display: 'block',
    color: '#fff',
    fontWeight: 500,
    textDecoration: 'none',
    textTransform: 'uppercase',
    borderBottom: '2px solid transparent',
    lineHeight: '2em'
  },
  active: {
    borderColor: '#f00'
  }
}))