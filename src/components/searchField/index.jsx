import React from 'react'
import AsyncSelect from 'react-select/async'
import { useDispatch } from 'react-redux'
import { bindPromiseCreators } from 'redux-saga-routines'

import { searchLocationPromise, getBatchForecast } from 'src/actions'
import styles from './styles'

const SearchField = () => {
  const dispatch = useDispatch()
  const { searchLocationPromise: handleSearch } = bindPromiseCreators({ searchLocationPromise }, dispatch)

  const handleChange = ({ label, value }) => {
    dispatch(getBatchForecast({
      name: label,
      id: value
    }))
  }

  return (
    <AsyncSelect
      placeholder='Search city'
      loadOptions={(inputValue) => handleSearch(inputValue)}
      onChange={handleChange}
      styles={styles}
    />
  )
}

export default SearchField