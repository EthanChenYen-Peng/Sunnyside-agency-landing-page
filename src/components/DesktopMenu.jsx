import styled from 'styled-components/macro'
import { sizes } from '../constants'
export default function DesktopMenu() {
  return (
    <List>
      <NavLink>About</NavLink>
      <NavLink>Services</NavLink>
      <NavLink>Project</NavLink>
      <ContactBtn>Contact</ContactBtn>
    </List>
  )
}

const List = styled.ul`
  display: none;
  @media (min-width: ${sizes.sm}) {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`

const ContactBtn = styled.li`
  list-style: none;
  font-size: 1.25rem;
  font-family: Fraunces;
  font-weight: 900;
  border-radius: 30px;
  padding: 1rem 2rem;
  background-color: white;
  color: var(--dark-desaturated-cyan);
  cursor: pointer;

  transition: color 0.2s, background-color 0.2s;
  &:hover {
    color: white;
    background-color: #84cff5;
  }
`

const NavLink = styled.li`
  list-style: none;
  font-size: 1.25rem;
  color: white;
  cursor: pointer;
`
