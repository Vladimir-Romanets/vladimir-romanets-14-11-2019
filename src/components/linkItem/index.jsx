import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import ROUTES from 'src/pages/routes'
import useStyles from './styles'


const LinkItem = ({ id, placeName, temperature, temperatureUnit }) => {
  const classes = useStyles()

  return (
    <Link to={`${ROUTES.home}/${id}`} className={classes.root}>
      <span className='title'>{placeName}</span>
      <span>{`${temperature}${temperatureUnit}`}</span>
    </Link>
  )
}

export default memo(LinkItem)