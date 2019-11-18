export const forecastListFormatter = day => ({
  date: day.Date,
  min: day.Temperature.Minimum.Value,
  max: day.Temperature.Maximum.Value,
  tempUnit: day.Temperature.Maximum.Unit,
  dayText: day.Day.IconPhrase,
  dayIcon: day.Day.Icon,
  nightText: day.Night.IconPhrase,
  nightIcon: day.Night.Icon
})

export const singleDayForecastFormatter = day => ({
  id: day.id,
  date: day.LocalObservationDateTime,
  temperature: day.Temperature.Imperial.Value,
  temperatureUnit: day.Temperature.Imperial.Unit,
  weatherIcon: day.WeatherIcon,
  weatherText: day.WeatherText,
})