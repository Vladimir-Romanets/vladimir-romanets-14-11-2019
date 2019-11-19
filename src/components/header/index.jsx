import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'

import useStyles from './styles'
import menuConfig from './menuConfig'
import Switcher from '../switcher'

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Switcher />
      <nav className={classes.navbar}>
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
      </nav>
    </AppBar>
  )
}

export default Header