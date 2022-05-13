import styled from 'styled-components/macro'
import logo from '../../images/logo.svg'

import { sizes } from '../constants'

export default function Header() {
  return (
    <Container>
      <Navbar>
        <img src={logo} />
        <p>Menu</p>
      </Navbar>
    </Container>
  )
}

const Container = styled.div`
  height: 80%;
  background-image: url('../../images/mobile/image-header.jpg');
  background-position: bottom;
`

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  position: sticky;

  @media (min-width: ${sizes.sm}) {
  }
`
