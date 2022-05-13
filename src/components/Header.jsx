import { useState } from 'react'
import styled from 'styled-components/macro'
import logo from '../../images/logo.svg'
import burger from '../../images/icon-hamburger.svg'
import MobileMenu from './MobileMenu'

import { sizes } from '../constants'
import DesktopMenu from './DesktopMenu'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <Navbar>
        <LogoContainer>
          <img src={logo} />
        </LogoContainer>
        <MenuToggle onClick={() => setOpen(!open)}>
          <img src={burger} />
        </MenuToggle>
        <DesktopMenu />
        <MobileMenu open={open} />
      </Navbar>
    </Container>
  )
}

const LogoContainer = styled.div`
  min-width: 50px;
`

const Container = styled.div`
  height: 80%;
  background-image: url('../../images/mobile/image-header.jpg');
  background-position: bottom;

  @media (min-width: ${sizes.sm}) {
    background-image: url('../../images/desktop/image-header.jpg');
    background-position: 50% 70%;
    height: 90%;
  }
`

const MenuToggle = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  @media (min-width: ${sizes.sm}) {
    display: none;
  }
`

const Navbar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  align-items: center;
`
