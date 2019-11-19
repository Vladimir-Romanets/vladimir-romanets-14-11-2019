import { makeStyles } from '@material-ui/core/styles'

const basicFlex = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}

export default makeStyles(() => ({
  root: {
    ...basicFlex,
    padding: '0 20px',
    justifyContent: 'space-between',
    position: 'static',
    fontSize: '16px'
  },
  navbar: {
    ...basicFlex,
    justifyContent: 'flex-end',
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