import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'

import useStyles from './styles'
import menuConfig from './menuConfig'

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      {
        menuConfig.map((item, i) => (
          <NavLink
            key={`${i}_${item.name}`}
            to={item.path}
            className={classes.link}
            activeClassName={classes.active}
          >
            {item.name}
          </NavLink>
        ))
      }
    </AppBar>
  )
}

export default Header