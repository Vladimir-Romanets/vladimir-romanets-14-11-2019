import React from 'react'
import { Container as PageContainer } from '@material-ui/core'

import useStyles from './styles'

const Container = ({ children }) => {
  const classes = useStyles()

  return (
    <PageContainer maxWidth='xl' className={classes.root}>
      {children}
    </PageContainer>
  )
}

Container.defaultProps = {
  children: null
}

export default Container