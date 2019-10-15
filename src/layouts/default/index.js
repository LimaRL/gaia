import React from 'react'
import PropTypes from 'prop-types'

import { Body, Main, Footer } from './styles'

export default function DefaultLayout ({ children }) {
  return (
    <Body>
      <header>header</header>

      <section>
        <div>sidebar</div>

        <Main>
          {children}
          <Footer>© Gaia</Footer>
        </Main>
      </section>
    </Body>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}
