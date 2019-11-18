import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'

import LinkItem from 'src/components/linkItem'

const Favorites = ({ list }) => (
  <Grid container>
    {
      list.map(el => <LinkItem key={el.id} {...el} />)
    }
  </Grid>
)

const mapStateToProps = ({ favorites }) => ({
  list: favorites.places
})

export default connect(mapStateToProps)(Favorites)