import styled from 'styled-components'

import { sizes } from '../constants'

export default function Header() {
  return (
    <Container>
      <p>Header</p>
    </Container>
  )
}

const Container = styled.div`
  @media (min-width: ${sizes.sm}) {
    background-color: red;
  }
`
