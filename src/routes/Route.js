import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import DefaultLayout from '~/layouts/default'

export default function RouteWrapper ({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const Layout = DefaultLayout

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
  isPrivate: false
}
