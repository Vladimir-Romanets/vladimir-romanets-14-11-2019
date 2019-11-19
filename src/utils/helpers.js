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
  date: day.LocalObservationDateTime,
  temperature: day.Temperature.Imperial.Value,
  temperatureUnit: day.Temperature.Imperial.Unit,
  weatherIcon: day.WeatherIcon,
  weatherText: day.WeatherText,
})

export const temperatureConvert = ({ isFaringate, temperature }) => {
  if (isNaN(temperature)) return temperature
  if (isFaringate) return `${temperature}°F`
  return `${Math.round((temperature - 32) / 1.8)}°C`
}