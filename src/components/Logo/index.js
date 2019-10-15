import React from 'react'

import LogoImg from '~/assets/images/logo.png'
import { Container } from './styles'

export default function Logo () {
  return (
    <Container>
      <img src={LogoImg} alt="" />
    </Container>
  )
}
