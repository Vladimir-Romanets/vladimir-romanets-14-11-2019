import React from 'react'
import { useDispatch } from 'react-redux'
import classnames from 'classnames'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Card, CardMedia, CardHeader, CardContent, IconButton } from '@material-ui/core'

import { addToFavorites } from 'src/actions'
import monthNames from 'src/constants/month'
import daysName from 'src/constants/days'
import { imgURL } from 'src/config'
import useStyles from './styles'

const DayExtendet = ({ day, name: placeName, id, isFavorite }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addToFavorites({
      id,
      placeName,
      temperature: day.temperature,
      temperatureUnit: day.temperatureUnit
    }))
  }

  return day ? (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        action={
          <IconButton
            className={classnames({ [classes.favorite]: isFavorite })}
            onClick={handleClick}
            title={isFavorite ? 'Remove from favorite' : 'Add to favorite'}
          >
            <FavoriteIcon />
          </IconButton>
        }
        title={placeName}
        subheader={`${day.temperature}${day.temperatureUnit}`}
      />
      <CardMedia
        className={classes.media}
        image={imgURL(day.weatherIcon)}
        title={day.weatherText}
      />
      <CardContent className={classes.content}>
        <div>
          {daysName[new Date(day.date).getDay()]}
        </div>
        <p>
          {new Date(day.date).getDate()}
        </p>
        <div>
          {monthNames[new Date(day.date).getMonth()]}
        </div>
      </CardContent>
    </Card>
  ) : null
}

export default DayExtendet