import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
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
