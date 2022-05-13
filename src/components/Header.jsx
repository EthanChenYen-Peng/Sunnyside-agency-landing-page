import { useState } from 'react'
import styled from 'styled-components/macro'
import logo from '../../images/logo.svg'
import burger from '../../images/icon-hamburger.svg'
import MobileMenu from './MobileMenu'

import { sizes } from '../constants'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <Navbar>
        <img src={logo} />
        <MenuToggle onClick={() => setOpen(!open)}>
          <img src={burger} />
        </MenuToggle>
        <MobileMenu open={open} />
      </Navbar>
    </Container>
  )
}

const Container = styled.div`
  height: 80%;
  background-image: url('../../images/mobile/image-header.jpg');
  background-position: bottom;
`

const MenuToggle = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
`

const Navbar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (min-width: ${sizes.sm}) {
  }
`
