import React from "react"
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'

import Day from 'src/components/day'

const ForecastList = ({ list }) => (
  <Grid container spacing={3} justify='center'>
    {
      list.map(day => <Day key={day.date} {...day} />)
    }
  </Grid>
)

const mapStateToProps = ({ weather }) => ({
  list: weather.fewDays
})

export default connect(mapStateToProps)(ForecastList)
