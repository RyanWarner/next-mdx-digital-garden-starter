import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
`

const Header = props =>
  <Nav>
    <Link href='/'>
      <a>Home</a>
    </Link>
    <Link href='/about'>
      <a>About</a>
    </Link>
  </Nav>

export default Header
