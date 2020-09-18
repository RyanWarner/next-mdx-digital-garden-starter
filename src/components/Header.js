import Link from 'next/link'
import siteConfig from 'site.config'
import styled from 'styled-components'

import { Width } from 'components'

const Nav = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  width: 100%;
`

const Wordmark = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.span`
  margin-right: 8px;
  font-size: 20px;
`

const Name = styled.span`
  font-weight: bold;
`

const NavItems = styled.ul`
  margin-left: auto;
  display: flex;
`

export const A = styled.a`
  text-decoration: none;
  color: ${props => props.theme.text10};

  &:hover {
    color: ${props => props.theme.green10};
  }
`

export const NavItem = styled.li`
  margin-left: 24px;
  list-style-type: none;
`

const Header = props => (
  <Width>
    <Nav>
      <Link href='/' passHref>
        <A>
          <Wordmark>
            <Logo>🌱</Logo>
            <Name>{siteConfig.author}</Name>
          </Wordmark>
        </A>
      </Link>
      <NavItems>
        <NavItem>
          <Link href='/garden' passHref>
            <A>Digital Garden</A>
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/about' passHref>
            <A>About</A>
          </Link>
        </NavItem>
      </NavItems>
    </Nav>
  </Width>
)

export default Header
