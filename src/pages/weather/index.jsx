import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import get from 'lodash/get'

import { getBatchForecast } from 'src/actions'
import Loader from 'src/components/loader'
import DayExtendet from 'src/components/dayExtendet'
import ForecastList from './forecastList'
import SearchField from '../../components/searchField'
import useStyles from './styles'

const Weather = ({ getBatchForecast, place, isFavorite, isFetch, singleDay }) => {
  const classes = useStyles()

  useEffect(() => {
    if (!isFetch && place.id) {
      getBatchForecast(place)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isFetch ? <Loader /> : (
    <>
      <Grid container justify='space-between' className={classes.topBlock}>
        <DayExtendet
          {...place}
          day={singleDay}
          isFavorite={isFavorite}
        />
        <Grid item xs={10} sm={6} md={4}>
          <SearchField />
        </Grid>
      </Grid>
      <ForecastList />
    </>
  )
}

const mapStateToProps = ({ weather, favorites }, { match }) => {
  const id = get(match, 'params.id', weather.id)
  const place = favorites.places.find(el => el.id === id)

  return {
    place: {
      id,
      name: place ? place.placeName : weather.placeName
    },
    singleDay: weather.singleDay,
    isFavorite: Boolean(place),
    isFetch: weather.isFetch
  }
}

const mapDispatchToProps = {
  getBatchForecast
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)