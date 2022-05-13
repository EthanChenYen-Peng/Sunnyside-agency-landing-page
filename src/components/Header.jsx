import styled from 'styled-components/macro'
import logo from '../../images/logo.svg'

import { sizes } from '../constants'

export default function Header() {
  return (
    <Container>
      <img src={logo} />
      <p>Menu</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: red;

  @media (min-width: ${sizes.sm}) {
  }
`
