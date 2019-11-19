import React, { useContext, memo } from 'react'
import Grid from '@material-ui/core/Grid'

import { imgURL } from 'src/config'
import monthNames from 'src/constants/month'
import { DegreesContext } from 'src/pages'
import { temperatureConvert } from 'src/utils/helpers'
import useStyles from './styles'

const Day = (props) => {
  const classes = useStyles()
  const { isFaringate } = useContext(DegreesContext)

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
          <small>{`min: ${temperatureConvert({ isFaringate, temperature: props.min })}`}</small>
          <small>{`max: ${temperatureConvert({ isFaringate, temperature: props.max })}`}</small>
        </div>
      </div>
    </Grid>
  )
}

export default memo(Day)