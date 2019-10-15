import React from 'react'
import PropTypes from 'prop-types'

import logo from '~/assets/images/logo.png'

import { Wrapper, Content } from './styles'

export default function AuthLayout ({ children }) {
  return (
    <Wrapper>
      <picture>
        <img src={logo} alt="GoBarber" />
      </picture>

      <Content>{children}</Content>
    </Wrapper>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
}
