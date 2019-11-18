import React, { memo } from 'react'
import Grid from '@material-ui/core/Grid'

import { imgURL } from 'src/config'
import monthNames from 'src/constants/month'
import useStyles from './styles'

const Day = (props) => {
  const classes = useStyles()

  return (
    <Grid item xs='auto'>
      <div className={classes.root}>
        <div className='row center bold'>
          {
            new Date(props.date).getDate()
          }
        </div>
        <div className='row center'>
          {
            monthNames[new Date(props.date).getMonth()]
          }
        </div>
        <div className='row flex'>
          <span>Day</span>
          <img src={imgURL(props.dayIcon)} alt={props.dayText} title={props.dayText} />
        </div>
        <div className='row flex'>
          <span>Night</span>
          <img src={imgURL(props.nightIcon)} alt={props.nightText} title={props.nightText} />
        </div>
        <div className='row flex'>
          <small>{`min: ${props.min}${props.tempUnit}`}</small>
          <small>{`max: ${props.max}${props.tempUnit}`}</small>
        </div>
      </div>
    </Grid>
  )
}

export default memo(Day)