import React, { useContext, memo } from 'react'
import { Link } from 'react-router-dom'

import { DegreesContext } from 'src/pages'
import ROUTES from 'src/pages/routes'
import { temperatureConvert } from 'src/utils/helpers'
import useStyles from './styles'


const LinkItem = ({ id, placeName, temperature, temperatureUnit }) => {
  const classes = useStyles()
  const { isFaringate } = useContext(DegreesContext)

  return (
    <Link to={`${ROUTES.home}/${id}`} className={classes.root}>
      <span className='title'>{placeName}</span>
      <span>{temperatureConvert({ isFaringate, temperature })}</span>
    </Link>
  )
}

export default memo(LinkItem)