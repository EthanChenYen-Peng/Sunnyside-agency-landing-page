import { useState } from 'react'
import styled from 'styled-components/macro'
import logo from '../../images/logo.svg'
import downArrow from '../../images/icon-arrow-down.svg'
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
      <HeroSection>
        <H1>We are creatives</H1>
        <img src={downArrow} />
      </HeroSection>
    </Container>
  )
}

const LogoContainer = styled.div`
  min-width: 50px;
`

const HeroSection = styled.div`
  padding-top: 8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  height: 100%;
`
const H1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: white;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-family: 'Fraunces', serif;

  @media (min-width: ${sizes.sm}) {
    font-size: 3rem;
  }
`

const Container = styled.div`
  height: 70%;
  background-image: url('../../images/mobile/image-header.jpg');
  background-position: 50% 80%;

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
