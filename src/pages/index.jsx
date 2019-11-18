import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Weather from './weather'
import Favorites from './favorites'
import ROUTES from './routes'
import { getUserGeolocation } from '../actions'
import Loader from '../components/loader'
import Container from '../components/container'
import Header from '../components/header'

const Content = ({ getUserGeolocation, isFetch }) => {
  useEffect(() => {
    getUserGeolocation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isFetch ? <Loader /> : (
    <>
      <Header />
      <Container>
        <Switch>
          <Route exact path={`${ROUTES.home}/:id?`} component={Weather} />
          <Route exact path={ROUTES.favorites} component={Favorites} />
          <Redirect to={ROUTES.home} />
        </Switch>
      </Container>
    </>
  )
}

const mapStateToProps = ({ location }) => ({
  isFetch: location.isFetch
})

const mapDispatchToProps = {
  getUserGeolocation
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)