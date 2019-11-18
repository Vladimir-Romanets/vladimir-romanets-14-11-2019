import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import get from 'lodash/get'
import Grid from '@material-ui/core/Grid'

import { getBatchForecast } from 'src/actions'
import Loader from 'src/components/loader'
import DayExtendet from 'src/components/dayExtendet'
import ForecastList from './forecastList'

const Weather = ({ getBatchForecast, place, isFavorite, isFetch, singleDay }) => {
  useEffect(() => {
    if (!isFetch && place) {
      getBatchForecast(place)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isFetch ? <Loader /> : (
    <div>
      <Grid container justify='space-between'>
        <DayExtendet placeName={place ? place.name : ''} day={singleDay} isFavorite={isFavorite} />
        <Grid>
          add to favorite
        </Grid>
      </Grid>
      <ForecastList />
    </div>
  )
}

const mapStateToProps = ({ location, weather, favorites }) => {
  const id = get(location, 'info.Key', '')
  return {
    place: location.info ? {
      id: get(location, 'info.Key', ''),
      name: get(location, 'info.AdministrativeArea.EnglishName', '')
    } : null,
    singleDay: weather.singleDay,
    isFavorite: favorites.places.some(el => el.id === id),
    isFetch: weather.isFetch
  }
}

const mapDispatchToProps = {
  getBatchForecast
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)