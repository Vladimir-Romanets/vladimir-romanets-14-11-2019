import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { DegreesContext } from 'src/pages'

const AntSwitch = withStyles(theme => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: '#52d869',
        borderColor: '#52d869',
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    height: '14px',
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch)

const Switcher = () => {
  const { isFaringate, toggleDegreeUnit } = useContext(DegreesContext)

  const handleChange = () => {
    toggleDegreeUnit(!isFaringate)
  }

  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>°C</Grid>
        <Grid item>
          <AntSwitch
            checked={isFaringate}
            onChange={handleChange}
            value="checkedC"
          />
        </Grid>
        <Grid item>°F</Grid>
      </Grid>
    </Typography>
  )
}

export default Switcher