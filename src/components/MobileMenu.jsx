import styled from 'styled-components/macro'

export default function MobileMenu({ open }) {
  return (
    <Container display={open ? 'flex' : 'none'}>
      <Clip />
      <NavLink>MobileMenu</NavLink>
      <NavLink>MobileMenu</NavLink>
      <NavLink>MobileMenu</NavLink>
      <ContactBtn>Contact</ContactBtn>
    </Container>
  )
}

const Clip = styled.div`
  width: 50px;
  height: 30px;
  background-color: red;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
  clip-path: polygon(100% 0, 50% 100%, 100% 100%);
  background-color: white;
`
const NavLink = styled.li`
  list-style: none;
  font-size: 1.25rem;
  color: var(--dark-grayish-blue);
  cursor: pointer; ;
`

const ContactBtn = styled.li`
  list-style: none;
  font-size: 1.25rem;
  font-family: Fraunces;
  font-weight: 900;
  border-radius: 30px;
  padding: 1rem 2rem;
  background-color: var(--yellow);
  cursor: pointer;
`

const Container = styled.div`
  background-color: white;
  position: absolute;
  top: 6rem;
  right: 2rem;
  left: 2rem;
  min-height: 300px;
  display: ${(props) => props.display};
  padding: 2rem 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
