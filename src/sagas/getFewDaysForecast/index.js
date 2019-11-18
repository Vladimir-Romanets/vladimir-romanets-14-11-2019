import request, { isProd } from 'src/utils/request'
import mockData from './mockData'

export function getFewDaysForecast(id) {
  return isProd ? request({ url: `/forecasts/v1/daily/5day/${id}` }) : { data: mockData }
}

