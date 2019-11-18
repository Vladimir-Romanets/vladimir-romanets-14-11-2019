import request, { isProd } from 'src/utils/request'
import mockData from './mockData'

export function getSingleDayForecast(id) {
  return isProd ? request({ url: `/currentconditions/v1/${id}` }) : { data: mockData }
}

